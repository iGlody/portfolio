<script>
	import '../app.css';
	import { inject } from '@vercel/analytics';
	import { dev } from '$app/environment';
	import { onMount } from 'svelte';

	onMount(() => {
		inject({ mode: dev ? 'development' : 'production' });
	});
</script>

<div class="fixed top-0 left-0 w-full h-8 text-white backdrop-blur-xl p-2">
	<nav class="flex justify-between px-2">
		<div class="flex gap-4">
			<a href="#hero">Home</a>
			<a href="#projects">Projects</a>
			<a href="#experience">Experience</a>
			<a href="#contact">Contact</a>
		</div>
		<div class="hidden gap-4 md:flex">
			<a href="https://github.com/iGlody" target="_blank">GitHub</a>
			<a href="https://www.linkedin.com/in/ilukaspesek/" target="_blank">LinkedIn</a>
			<a href="https://soundcloud.com/l70ka5" target="_blank">SoundCloud</a>
		</div>
	</nav>
</div>
<main class="min-h-screen font-titillium-web">
	<slot />
</main>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		scroll-behavior: smooth;
	}

	:global(*, *::before, *::after) {
		box-sizing: inherit;
	}

	main {
		background: rgb(13, 19, 32);
		background: linear-gradient(180deg, rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
		color: white;
		font-family: 'Titillium Web', BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
	}

	:global(h1) {
		font-size: 4rem;
		font-weight: 600;
		margin: 0;
		line-height: 1.1;
	}

	:global(h2) {
		font-size: 2.5rem;
		font-weight: 500;
		margin: 0;
		line-height: 1.2;
	}

	:global(p) {
		font-size: 1.25rem;
		line-height: 1.6;
		margin: 0;
	}

	:global(section) {
		padding: 2rem 1rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		:global(section) {
			padding: 4rem 2rem;
		}
	}
</style>
