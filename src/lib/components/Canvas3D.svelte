<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import { Vector3, BufferGeometry } from 'three';
	import { Canvas } from '@threlte/core';
	import { Align } from '@threlte/extras';

	// Point size control
	let pointSize = 0.25;

	// Camera control
	let baseCameraDistance = 8;

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
</script>

<div class="h-full w-full pointer-events-none select-none">
	<Canvas>
		<T.DirectionalLight position={[0, 0, 0]} intensity={1} />

		<T.PerspectiveCamera
			makeDefault
			position.y={1}
			position.z={baseCameraDistance}
			fov={90}
		>
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
			<T.Points>
				<T is={pointsBufferGeometry} />
				<T.PointsMaterial size={pointSize} />
			</T.Points>
		</Align>
	</Canvas>
</div>
