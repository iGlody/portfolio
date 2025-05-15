<script lang="ts">
	import { onMount } from 'svelte';
	import { T } from '@threlte/core';
	import { AudioListener, PositionalAudio } from '@threlte/extras';
	import { OrbitControls } from '@threlte/extras';
	import { TextureLoader, Vector3, BufferGeometry } from 'three';

	import track from '$lib/audio/Halcyon.mp3';
	import { Canvas } from '@threlte/core';

	import { Align, Environment, Float, Text3DGeometry, Stars } from '@threlte/extras';
	import { Audio } from '@threlte/extras';
	import { Volume } from 'three/examples/jsm/Addons.js';

	let audio: PositionalAudio; // Reference to the audio object
	let isPlaying = false; // Track the playback state
	let coverOpen = false; // Simulate a cover open/close state for interaction

	let audioElement; // Reference to the audio element
	let analyser, frequencyData;
	let low = 0,
		mid = 0,
		high = 0,
		volume = 0;

	let minInput = 0;
	let maxInput = 252;
	let minOutput = 0.05;
	let maxOutput = 0.01;

	// Variables for updating points
	let vxFactor1 = 0.8;
	let vxFactor2 = 1;
	let vxMultiplier = 12;
	let vxRandomFactor = 0.1;
	let vyFactor1 = 0.8;
	let vyFactor2 = 0.3;
	let vyMultiplier = 10;
	let vyRandomFactor = 0.1;
	let vzRandomFactor = 0.01;

	// Point size control
	let basePointSize = 0.25;
	let dynamicPointSize = basePointSize;

	// Camera control
	let baseCameraDistance = 8;
	let cameraZoom = 0; // We'll use this to control the camera's zoom
	let lowZoomFactor = 20; // Increased for more noticeable effect on kicks
	let cameraRef;
	let controlsRef;

	// Kick detection
	let prevLow = 0;
	let lowThreshold = 0.1; // Threshold for detecting significant changes in low frequencies
	let kickDecay = 0.85; // How quickly the zoom effect fades after a kick (lower = faster)
	let kickBoost = 0.3; // Additional zoom boost when a kick is detected

	const size = 20;
	const count = size ** 3;

	const vectorPositions: Vector3[] = [];
	for (let i = 0; i < count; i++) {
		let x = i / (size * size);
		let y = (i / size) % size;
		let z = i % size;

		const vx =
			Math.sin(Math.abs(size - x) * vxFactor1) *
				Math.sin(Math.abs(size - y) * vxFactor2) *
				vxMultiplier +
			Math.random() * vxRandomFactor;

		const vy =
			Math.sin(Math.abs(size - x) * vyFactor1) *
				Math.sin(Math.abs(size - y) * vyFactor2) *
				vyMultiplier +
			Math.random() * vyRandomFactor;

		const vz = y + Math.random() * vzRandomFactor * z;

		vectorPositions.push(new Vector3(vx, vy, vz));
	}
	const pointsBufferGeometry = new BufferGeometry().setFromPoints(vectorPositions);

	// Update the points dynamically
	function updatePointsGeometry() {
		const newVectorPositions: Vector3[] = [];

		const normalizedLow = 1 + ((low - minInput) / (maxInput - minInput)) * 9;
		const normalizedMid = 1 + ((mid - minInput) / (maxInput - minInput)) * 9;
		const normalizeHigh = 1 + ((high - minInput) / (maxInput - minInput)) * 9;
		const normalizeVolume = 1 + ((volume - minInput) / (maxInput - minInput)) * 9;

		const Low = Math.log10(normalizedLow);
		const Mid = Math.log10(normalizedMid);
		const High = Math.log10(normalizeHigh);
		const Volume = Math.log10(normalizeVolume);

		// Update point size based on audio data
		const lowSizeFactor = 0.000001; // How much low frequencies affect size
		const midSizeFactor = 0.2; // How much mid frequencies affect size
		const highSizeFactor = 0.4; // How much high frequencies affect size

		// Calculate new point size
		dynamicPointSize = basePointSize + low * lowSizeFactor;
		dynamicPointSize = Math.max(0.3, Math.min(2, dynamicPointSize));

		// Update camera zoom based on Low variable with kick detection
		// Calculate the change in low frequency from the previous frame
		const lowDelta = Low - prevLow;
		prevLow = Low;

		// Detect kick drum hits (sudden increases in low frequencies)
		let kickDetected = lowDelta > lowThreshold;

		// Apply zoom effect with extra boost for kicks
		if (kickDetected) {
			// Apply an immediate boost when a kick is detected
			cameraZoom = 1.0 + Low * lowZoomFactor + kickBoost;
		} else {
			// Decay the current zoom effect to create a "bounce back" effect
			cameraZoom = 1.0 + Low * lowZoomFactor + (cameraZoom - 1.0) * kickDecay;
		}

		// Ensure zoom stays within reasonable bounds
		cameraZoom = Math.max(0.8, Math.min(2.0, cameraZoom));

		for (let i = 0; i < count; i++) {
			let x = i / (size * size);
			let y = (i / size) % size;
			let z = i % size;

			const vx =
				Math.sin(Math.abs(size - x + (Volume / 1) * Low * 1.2) * vxFactor1) *
					Math.sin(Math.abs(size - y) * vxFactor2) *
					vxMultiplier +
				Math.random() * vxRandomFactor;

			const vy =
				Math.sin(Math.abs(size - x + Volume * Mid) * vyFactor1) *
					Math.sin(Math.abs(size - y) * vyFactor2) *
					vyMultiplier +
				Math.random() * vyRandomFactor;

			const vz = y + Math.random() * vzRandomFactor * z;
			newVectorPositions.push(new Vector3(vx, vy, vz));
		}
		pointsBufferGeometry.setFromPoints(newVectorPositions);
	}

	// Utility to calculate average intensity in a frequency range
	function getFrequencyRange(minFreq, maxFreq) {
		const nyquist = 22050; // Half the standard sampling rate (44100 Hz)
		const startBin = Math.floor((minFreq / nyquist) * analyser.frequencyBinCount);
		const endBin = Math.floor((maxFreq / nyquist) * analyser.frequencyBinCount);

		let sum = 0;
		let count = 0;
		for (let i = startBin; i <= endBin; i++) {
			sum += frequencyData[i];
			count++;
		}
		return sum / count || 0; // Return average intensity
	}

	// Utility to calculate overall volume
	function getVolume() {
		let sum = 0;
		for (let i = 0; i < frequencyData.length; i++) {
			sum += frequencyData[i] * frequencyData[i]; // Square the values for RMS
		}
		return Math.sqrt(sum / frequencyData.length); // Return RMS volume
	}

	function startAnalysis() {
		// Start analyzing the audio
		analyze();
	}

	function analyze() {
		if (analyser) {
			analyser.getByteFrequencyData(frequencyData);

			// Calculate frequency ranges
			low = getFrequencyRange(20, 250);
			mid = getFrequencyRange(250, 2000);
			high = getFrequencyRange(2000, 20000);
			volume = getVolume();

			console.log(low, mid, high, volume);

			requestAnimationFrame(analyze);
		}
	}
	// Loop to change variables over time
	onMount(() => {
		if (audioElement) {
			const audioContext = new AudioContext();
			const audioSource = audioContext.createMediaElementSource(audioElement);

			// Create an AnalyserNode
			analyser = audioContext.createAnalyser();
			analyser.fftSize = 512; // Determines frequency resolution
			frequencyData = new Uint8Array(analyser.frequencyBinCount);

			// Connect the audio source to the analyser and the audio destination
			audioSource.connect(analyser);
			analyser.connect(audioContext.destination);

			// Start analyzing the audio
			startAnalysis();
		}
		const interval1 = setInterval(updatePointsGeometry, 32);
		return () => {
			clearInterval(interval1);
		};
	});
</script>

<div class="absolute h-full w-full object-cover">
	<Canvas>
		<T.DirectionalLight position={[0, 0, 0]} intensity={1} />

		<T.PerspectiveCamera
			makeDefault
			position.y={1}
			position.z={baseCameraDistance}
			fov={90}
			zoom={cameraZoom}
		>
			<OrbitControls
				enableDamping
				dampingFactor={0.1}
				enablePan={true}
				enableZoom={true}
				autoRotate
				autoRotateSpeed={2}
			/>
			<AudioListener />
		</T.PerspectiveCamera>

		<T.DirectionalLight position.y={10} position.z={10} />

		<Align>
			<T.Points>
				<T is={pointsBufferGeometry} />
				<T.PointsMaterial size={dynamicPointSize} />
			</T.Points>
		</Align>
	</Canvas>
</div>

<div class="flex justify-between w-full">
	<div class="audio-container w-full z-40">
		<div class="w-full flex flex-col gap-2">
			<audio bind:this={audioElement} class="w-full" controls autoplay loop>
				<source src={track} type="audio/mp3" />
				Your browser does not support the audio element.
			</audio>
		</div>
	</div>
	<div class="hidden z-50 audio-stats grid grid-cols-1 gap-2">
		<p><strong>Low:</strong> {low.toFixed(2)}</p>
		<p><strong>Mid:</strong> {mid.toFixed(2)}</p>
		<p><strong>High:</strong> {high.toFixed(2)}</p>
		<p><strong>Volume:</strong> {volume.toFixed(2)}</p>
	</div>
</div>

<style>
	.audio-container {
		display: fixed;
		flex-direction: column;
		align-items: center;
	}

	.audio-stats {
		margin-top: 1rem;
		font-family: Arial, sans-serif;
		text-align: center;
	}
</style>
