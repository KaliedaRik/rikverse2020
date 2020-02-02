<style global>
    @tailwind base;

    body {
        @apply font-sans bg-blue-100 p-0;
        font-size: 14px;
        line-height: 1.25;
    }
    main {
        @apply mx-auto px-6 pb-2 text-gray-700 bg-blue-100;
        max-width: 680px;
        min-height: 67vh;
    }

    h1, h2, h3 {
        @apply font-serif font-semibold mb-4 pt-4;
    }
    h1 {
        @apply text-3xl; 
    }
    h2 {
        @apply text-2xl; 
    }
    h3 {
        @apply text-xl; 
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
            @apply rounded-lg;
            max-width: 760px;
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

    let page, params;

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

<main>
    <svelte:component this={page} params={params} />
</main>

<Footer />
