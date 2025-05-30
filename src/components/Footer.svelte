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
    button img, input[type="image"] {
        @apply block mx-auto border-0 outline-none;
        height: 40px;
    }
    form {
        @apply pt-6;
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

<script>
    import NavigationLinks from './NavigationLinks.svelte';

    import { navigateTo } from '../utilities.js';
    import { paypalCookies } from '../handleCookies.js';

    const setupPayPalAction = (e) => navigateTo('/cookies');

    const myPayPalAction = (e) => window.location = 'https://www.paypal.me/RichardRoots?locale.x=en_GB';
</script>

<footer>
    <NavigationLinks />

    {#if $paypalCookies === 'yes'}
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="business" value="FXAG4C2P2YE7A" />
        <input type="hidden" name="item_name" value="To keep the RikVerse website up-and-running" />
        <input type="hidden" name="currency_code" value="GBP" />
        <input type="image" src="http://rikverse2020.rikweb.org.uk/images/donate-button.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        <img alt="" border="0" src="https://www.paypal.com/en_GB/i/scr/pixel.gif" width="1" height="1" />
    </form>
    {:else if $paypalCookies === 'no'}
    <button on:click={myPayPalAction}>
        <img src="/images/donate-button.png" alt="Visit Rik's PayPal.me page to give him a donation" />
    </button>
    {:else}
    <button on:click={setupPayPalAction}>
        <img src="/images/donate-button.png" alt="You need to decide whether to accept/refuse cookies before you can give Rik a donation" />
    </button>
    {/if}

    <p>&copy;2025 Rik Roots. Site built and maintained by RikWorks.<br />
        Tech: <a href="https://svelte.dev/">Svelte</a> scaffold, <a href="https://visionmedia.github.io/page.js/">Page.js</a> routing, <a href="https://tailwindcss.com/">Tailwind</a> css</p>
</footer>
