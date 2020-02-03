<style global>
    @tailwind base;

    html {
        font-size: 14px;
    }

    body {
        @apply font-sans bg-blue-100 p-0;
        line-height: 1.25;
    }
    main {
        @apply mx-auto px-6 pb-2 text-gray-700 bg-blue-100;
        max-width: 680px;
        min-height: 67vh;
    }

    h1, h2, h3 {
        @apply font-serif mb-4 pt-4;
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
        line-height: 1.5;
    }
    a {
        @apply text-green-700;
    }

    @media (min-width: 768px) {
        html {
            font-size: 16px;
        }
        body {
            @apply bg-indigo-100 p-4;
        }
        main {
            @apply rounded-lg;
            max-width: 760px;
        }
    }
    @media (min-width: 1024px) {
        html {
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
    // Svelte variables
    let page, params;

    // Page.js routing functionality
    import {router, startRouter, routes } from './routes.js';

    // Build Page.js routes
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

    // Start the Page.js router and watch for changes
    startRouter();

    import Navigation from './components/Navigation.svelte';

    // this handles external links into the site
    // - because the site is essentially a single page app
    // - the server will give a '404' not found error if browser tries to load http://site.com/blog
    // - thus external links should be in the form http://site.com/?p=blog
    let loc = window.location;
    if (loc.search) {

        let searchParams = new URLSearchParams(loc.search.substring(1)),
            redirect = searchParams.get('p');

        // Page.js router is listening for anchor clicks
        // - so use it to trigger a redirect to the correct path
        // - create anchor; add it to the DOM; click it
        let a = document.createElement('a');
        a.href = `/${redirect}`;

        document.body.appendChild(a);
        a.click();
    }
</script>

<Navigation />

<svelte:component this={page} params={params} />
