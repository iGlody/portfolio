<script lang="ts">
	import App from '$lib/components/App.svelte';
</script>

<!-- Hero Section -->
<section id="hero" class="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
	<div class="h-96 lg:h-[500px] w-full">
		<App />
	</div>
	<div class="flex flex-col justify-center space-y-4">
		<h1>Lukáš Pešek</h1>
		<p class="text-xl opacity-90">Full Stack Developer + Creative Technologist</p>
		<p class="text-lg opacity-75 max-w-md">
			Building Full stack web applications and creative solutions for the web with over 5 years of
			experience.
		</p>
		<div class="flex justify-end">
			<table class="text-sm opacity-75 max-w-sm">
				<tr>
					<td class="text-end">70%</td>
					<td>Curious</td>
				</tr>
				<tr>
					<td class="text-end">20%</td>
					<td>Passionate</td>
				</tr>
				<tr>
					<td class="text-end">10%</td>
					<td>Critical</td>
				</tr>
			</table>
		</div>
	</div>
</section>

<!-- Projects Section -->
<section id="projects">
	<div class="mb-12">
		<h1>Projects</h1>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
		<div class="space-y-4">
			<h2>Roomloop.eu</h2>
			<div>
				<h3>role: Founder + Frontend Developer</h3>
				<h3>link: <a href="https://roomloop.eu/" target="_blank">roomloop.eu</a></h3>
			</div>
			<ul class="list-disc pl-6">
				<li>Frontend development on the website and platform it self</li>
				<li>Project management with team of designers, marketing and development</li>
				<li>End to end user testing</li>
			</ul>
			<div class="text-sm opacity-75">
				<span class="inline-block bg-white/10 px-3 py-1 mr-2">Project Management</span>
				<span class="inline-block bg-white/10 px-3 py-1 mr-2">Web Development</span>
				<span class="inline-block bg-white/10 px-3 py-1 mr-2">Problem Solving</span>
			</div>
		</div>
		<div class="space-y-4">
			<h2>Domoreforwater.org</h2>
			<div>
				<h3>role: Full-Stack Developer + Creative Advisor</h3>
				<h3>link: <a href="https://domoreforwater.org/" target="_blank">domoreforwater.org</a></h3>
			</div>
			<ul class="list-disc pl-6">
				<li>Building a CMS system for researchers and team members with relational database</li>
				<li>Full stack development on the platform it self</li>
			</ul>
			<div class="text-sm opacity-75">
				<span class="inline-block bg-white/10 px-3 py-1 mr-2">Project Management</span>
				<span class="inline-block bg-white/10 px-3 py-1 mr-2">Web Development</span>
				<span class="inline-block bg-white/10 px-3 py-1 mr-2">Problem Solving</span>
				<span class="inline-block bg-white/10 px-3 py-1">CMS</span>
			</div>
		</div>
		<div class="space-y-4">
			<h2>Subcleaner</h2>
			<div>
				<h3>role: Founder + Full-Stack Developer</h3>
				<h3>link: <a href="https://subcleaner.com/" target="_blank">subcleaner.com</a></h3>
			</div>
			<ul class="list-disc pl-6">
				<li>SEO optimization for AI agents</li>
				<li>Full stack development with reddit API and user friendly interface</li>
				<li>Analytics of current user usage and improving the app based on user feedback</li>
			</ul>
			<div class="text-sm opacity-75">
				<span class="inline-block bg-white/10 px-3 py-1 mr-2">Svelte</span>
				<span class="inline-block bg-white/10 px-3 py-1 mr-2">TypeScript</span>
				<span class="inline-block bg-white/10 px-3 py-1 mr-2">Reddit API</span>
				<span class="inline-block bg-white/10 px-3 py-1">SEO</span>
			</div>
		</div>
		<div class="space-y-4">
			<h2>Calendar Filter App</h2>
			<div>
				<h3>role: Founder + Full-Stack Developer</h3>
				<h3>link: <a href="https://www.lukaspesek.com/" target="_blank">lukaspesek.com</a></h3>
			</div>
			<ul class="list-disc pl-6">
				<li>
					Managing over 100 calendars with full backend and API requests on hourly basis for over a
					year
				</li>
				<li>Creating filtering algorithms and data processing</li>
				<li>Easy to use and user friendly interface</li>
			</ul>
			<div class="text-sm opacity-75">
				<span class="inline-block bg-white/10 px-3 py-1 mr-2">Svelte</span>
				<span class="inline-block bg-white/10 px-3 py-1 mr-2">TypeScript</span>
				<span class="inline-block bg-white/10 px-3 py-1 mr-2">Calendar API</span>
			</div>
		</div>
	</div>
</section>

<!-- Other Projects Section -->
<section>
	<div class="mb-12">
		<h1>Other Projects</h1>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		<div class="bg-white/5 p-4 space-y-2">
			<h3 class="text-lg font-semibold">Ancore</h3>
			<a href="https://www.ancoreai.com/" target="_blank">ancore.app</a>
			<p class="text-sm opacity-75">
				Optimize your website to communicate effectively with AI agents and stay ahead in the age of
				artificial intelligence.
			</p>
			<div class="flex flex-wrap gap-1">
				<span class="text-xs bg-white/10 px-2 py-1">Svelte</span>
				<span class="text-xs bg-white/10 px-2 py-1">Tailwind</span>
			</div>
		</div>
		<div class="bg-white/5 p-4 space-y-2">
			<h3 class="text-lg font-semibold">Anatei</h3>
			<a href="https://www.anatei.com/" target="_blank">anatei.com</a>
			<p class="text-sm opacity-75">
				Finance company website with modern design and responsive layout
			</p>
			<div class="flex flex-wrap gap-1">
				<span class="text-xs bg-white/10 px-2 py-1">Svelte</span>
				<span class="text-xs bg-white/10 px-2 py-1">Tailwind</span>
			</div>
		</div>
		<div class="bg-white/5 p-4 space-y-2">
			<h3 class="text-lg font-semibold">JLcars</h3>
			<a href="https://www.jlcars.cz/" target="_blank">jlcars.cz</a>
			<p class="text-sm opacity-75">
				Car dealership website with modern design and responsive layout
			</p>
			<div class="flex flex-wrap gap-1">
				<span class="text-xs bg-white/10 px-2 py-1">Svelte</span>
				<span class="text-xs bg-white/10 px-2 py-1">GSAP</span>
			</div>
		</div>
		<div class="bg-white/5 p-4 space-y-2">
			<h3 class="text-lg font-semibold">9inetyse7en.com</h3>
			<a href="https://www.9inetyse7en.com/" target="_blank">9inetyse7en.com</a>
			<p class="text-sm opacity-75">
				Musician portfolio website with modern design and responsive layout
			</p>
			<div class="flex flex-wrap gap-1">
				<span class="text-xs bg-white/10 px-2 py-1">Svelte</span>
				<span class="text-xs bg-white/10 px-2 py-1">Tailwind</span>
			</div>
		</div>
		<div class="bg-white/5 p-4 space-y-2">
			<h3 class="text-lg font-semibold">Rever</h3>
			<a href="https://rever-nine.vercel.app/" target="_blank">rever.cz</a>
			<p class="text-sm opacity-75">
				Drilling company website with modern design and responsive layout
			</p>
			<div class="flex flex-wrap gap-1">
				<span class="text-xs bg-white/10 px-2 py-1">Svelte</span>
				<span class="text-xs bg-white/10 px-2 py-1">Tailwind</span>
			</div>
		</div>
		<div class="bg-white/5 p-4 space-y-2">
			<h3 class="text-lg font-semibold">Audio Reactive 3D Visualizer</h3>
			<a href="https://nur-demo.netlify.app/" target="_blank">nur-demo.netlify.app</a>
			<p class="text-sm opacity-75">
				Audio reactive 3D visualizer with modern design and responsive layout
			</p>
			<div class="flex flex-wrap gap-1">
				<span class="text-xs bg-white/10 px-2 py-1">Svelte</span>
				<span class="text-xs bg-white/10 px-2 py-1">Three.js</span>
			</div>
		</div>
	</div>
</section>

<!-- Experience Section -->
<section id="experience">
	<div class="mb-12">
		<h1>Work Experience</h1>
	</div>
	<div class="space-y-8">
		<div class="border-l-2 border-white/20 pl-6">
			<h2 class="text-2xl">Founder</h2>
			<p class="opacity-75 mb-2">
				<a href="https://amygware.com/" target="_blank">Amygware s.r.o.</a> • Aug 2024 - Present
			</p>
			<ul class="list-disc pl-6">
				<li>Web development and branding agency</li>
				<li>
					Building innovative software solutions and leading technical development in modern web
					applications.
				</li>
				<li>
					Communicating with business partners and clients to ensure alignment with project goals.
				</li>
			</ul>
		</div>
		<div class="border-l-2 border-white/20 pl-6">
			<h2 class="text-2xl">Full-Stack Web Developer</h2>
			<p class="opacity-75 mb-2">Freelance • Nov 2023 - Aug 2024</p>
			<ul class="list-disc pl-6">
				<li>
					Developing modern web applications with focus on user experience, performance, and
					scalable architecture.
				</li>
			</ul>
		</div>
		<div class="border-l-2 border-white/20 pl-6">
			<h2 class="text-2xl">Programming Instructor</h2>
			<p class="opacity-75 mb-2">
				<a href="https://makeittoday.cz/" target="_blank">makeITtoday s.r.o.</a> · Oct 2023 - Jun 2024
			</p>
			<ul class="list-disc pl-6">
				<li>
					Teaching Python and Scratch to students of various skill levels, fostering creativity and
					problem-solving through coding.
				</li>
				<li>
					Designing interactive lessons and projects to make programming accessible and engaging.
				</li>
				<li>
					Guiding students in developing computational thinking and real-world coding applications
				</li>
			</ul>
		</div>
		<div class="border-l-2 border-white/20 pl-6">
			<h2 class="text-2xl">Market Research Intern</h2>
			<p class="opacity-75 mb-2">
				<a href="https://www.myepico.com/" target="_blank">Epico International s.r.o.</a> • Jun 2021
				- Aug 2021
			</p>
			<ul class="list-disc pl-6">
				<li>
					Identifying and connecting with potential B2B partners and distributors for new product
					lines.
				</li>
				<li>
					Conducting market evaluations to assess demand, competition, and expansion opportunities.
				</li>
			</ul>
		</div>
		<div class="border-l-2 border-white/20 pl-6">
			<h2 class="text-2xl">PHP/JS Developer</h2>
			<p class="opacity-75 mb-2">
				<a href="https://www.myepico.com/" target="_blank">GoOut s.r.o.</a> • Nov 2020 - Jan 2021
			</p>
			<ul class="list-disc pl-6">
				<li>Developed PHP parsers to fetch and process data from various venue websites.</li>
				<li>Worked with MySQL for efficient data storage and retrieval.</li>
				<li>Utilized JavaScript to enhance data processing and automation.</li>
			</ul>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-12 min-h-[800px] flex items-center justify-center">
	<div class="text-center space-y-6">
		<h1>Let's Connect</h1>
		<p class="text-xl opacity-90 max-w-2xl mx-auto">
			Do you have a project in mind? I would like to hear it out! hit me up
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="mailto:contact@amygware.com"
				class="bg-white/10 hover:bg-white/20 px-6 py-3 transition-colors"
			>
				Get in Touch
			</a>
			<a
				href="https://www.linkedin.com/in/ilukaspesek/"
				target="_blank"
				class="border border-white/20 hover:border-white/40 px-6 py-3 transition-colors"
			>
				LinkedIn
			</a>
		</div>
	</div>
</section>
