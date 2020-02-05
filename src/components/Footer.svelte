<script>
    import NavigationLinks from './NavigationLinks.svelte';

    import { navigateTo } from '../utilities.js';

    const setupPayPalAction = (e) => navigateTo('/cookies');
</script>

<style>
    footer {
        @apply bg-blue-800 py-4;
    }
    p {
        @apply text-sm text-center text-gray-500 m-0 mt-4 pt-4;
        border-top: 1px solid rgba(200, 200, 200, 0.3);
    }
    button {
        @apply bg-blue-800 block w-full mt-5 border-0 outline-none;
    }
    button img {
        @apply block mx-auto border-0 outline-none;
        height: 40px;
    }
    a {
        @apply text-gray-200 no-underline;
        transition: color 0.5s;
    }
    a:hover {
        @apply underline;
        color: #fffc00;
    }

    @media (min-width: 768px) {
        footer {
            @apply rounded-lg mb-4;
        }
    }    
</style>

<footer>
    <NavigationLinks />

    <button on:click={setupPayPalAction}>
        <img src="/images/donate-button.png" alt="Image button for PayPal donations to support the RikVerse website" />
    </button>

    <p>&copy;2020 Rik Roots. Site built and maintained by RikWorks.<br />
        Tech: <a href="https://svelte.dev/">Svelte</a> scaffold, <a href="https://visionmedia.github.io/page.js/">Page.js</a> routing, <a href="https://tailwindcss.com/">Tailwind</a> css</p>
</footer>
