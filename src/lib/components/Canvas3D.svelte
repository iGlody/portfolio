<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import { Vector3, BufferGeometry } from 'three';
	import { Canvas } from '@threlte/core';
	import { Align } from '@threlte/extras';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment';

	// Point size control
	let pointSize = 0.25;

	// Camera control
	let baseCameraDistance = 8;
	let scrollRotationX = 0;

	const size = 20;
	const count = size ** 3;

	// Create static 3D points geometry
	const vectorPositions: Vector3[] = [];
	for (let i = 0; i < count; i++) {
		let x = i / (size * size);
		let y = (i / size) % size;
		let z = i % size;

		const vx = Math.sin(Math.abs(size - x) * 0.8) * Math.sin(Math.abs(size - y) * 1) * 12;
		const vy = Math.sin(Math.abs(size - x) * 0.8) * Math.sin(Math.abs(size - y) * 0.3) * 10;
		const vz = y;

		vectorPositions.push(new Vector3(vx, vy, vz));
	}
	const pointsBufferGeometry = new BufferGeometry().setFromPoints(vectorPositions);

	// Scroll event handler
	function handleScroll() {
		if (!browser) return;

		const scrollY = window.scrollY;
		const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
		const scrollProgress = Math.min(scrollY / maxScroll, 1);

		// Rotate from 0 to 90 degrees (π/2 radians) based on scroll - less sensitive
		scrollRotationX = scrollProgress * Math.PI * -0.6;
	}

	onMount(() => {
		if (browser) {
			window.addEventListener('scroll', handleScroll);
			handleScroll(); // Initial call
		}
	});

	onDestroy(() => {
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<div class="h-full w-full pointer-events-none select-none">
	<Canvas>
		<T.DirectionalLight position={[0, 0, 0]} intensity={1} />

		<T.PerspectiveCamera makeDefault position.y={1} position.z={baseCameraDistance} fov={90}>
			<OrbitControls
				enableDamping={false}
				enablePan={false}
				enableZoom={false}
				enableRotate={false}
				autoRotate={true}
				autoRotateSpeed={2}
			/>
		</T.PerspectiveCamera>

		<T.DirectionalLight position.y={10} position.z={10} />

		<Align>
			<T.Group rotation.x={scrollRotationX}>
				<T.Points>
					<T is={pointsBufferGeometry} />
					<T.PointsMaterial size={pointSize} />
				</T.Points>
			</T.Group>
		</Align>
	</Canvas>
</div>
