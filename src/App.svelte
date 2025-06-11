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
    import Footer from './components/Footer.svelte';

    // Functionality to handle page redirects from "partial static" site pages
    import { navigateTo } from './utilities.js';

    let search = window.location.search;
    if (search) {

        let searchParams = new URLSearchParams(search.substring(1)),
            redirect = searchParams.get('p');

        navigateTo(`/${redirect}`);
    }
</script>

<Navigation />

<main>
    <svelte:component this={page} {params} />
</main>

<Footer />
