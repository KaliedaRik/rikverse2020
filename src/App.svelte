<style global>
	@tailwind base;

	body {
		@apply bg-blue-100 p-0;
		font-family: Roboto, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans", sans-serif;
		font-size: 14px;
	}

	main {
		max-width: 680px;
		min-height: 67vh;
		margin: 0 auto;
		@apply px-6 pb-2 text-gray-700 bg-blue-100;
	}

	h1, h2, h3 {
		font-family: "Roboto Slab", Georgia, Cambria, "Times New Roman", Times, serif;
		line-height: 1.25;
	}

	h1 {
		@apply text-3xl font-semibold mb-4 pt-4; 
	}

	h2 {
		@apply text-2xl font-semibold mb-4 pt-4; 
	}

	h3 {
		@apply text-xl font-semibold mb-4 pt-4; 
	}

	p {
		@apply mb-4;
	}

	a {
		@apply text-green-700;
	}

	@media (min-width: 768px) {

		body {
			@apply bg-indigo-100 p-4;
			font-size: 16px;
		}

		main {
			max-width: 760px;
			@apply rounded-lg;
		}
	}

	@media (min-width: 1024px) {

		body {
			font-size: 18px;
		}

		main {
			max-width: 920px;
		}
	}

	@tailwind components;
	@tailwind utilities;
</style>

<script>
	import {router, startRouter, routes } from './routes.js';

	import Navigation from './components/Navigation.svelte';
	import Footer from './components/Footer.svelte';

	let page, params,
		loc = window.location;

	// Build routes
	routes.forEach(route => {

		router(
			route.path, 

			(ctx, next) => {
				params = ctx.params;
				next();
			},

			() => page = route.component
		);
	});

	// Set up the router to start and actively watch for changes
	startRouter();
</script>

<Navigation />

<svelte:component this={page} params={params} />

<Footer />
