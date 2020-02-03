<script>

    const setupPayPalAction = (e) => {

        let loc = window.location;
        loc.assign(`${loc.origin}/cookies`);
    };
</script>

<style>
    footer {
        @apply bg-blue-800 py-4;
    }
    .nav-grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 0 0;
        justify-items: center;
    }
    a {
        @apply inline-block text-center m-0 text-gray-200 no-underline;
        font-family: "Roboto Slab", Georgia, Cambria, "Times New Roman", Times, serif;
        transition: color 0.5s;
    }
    a:hover {
        @apply underline;
        color: #fffc00;
    }
    p {
        @apply text-sm text-center text-gray-500 m-0 mt-4 pt-4;
        border-top: 1px solid rgba(200, 200, 200, 0.3);
    }
    button {
        @apply block w-full mt-5 border-0;
    }
    button img {
        @apply block mx-auto;
        height: 40px;
    }

    @media (min-width: 768px) {
        footer {
            @apply rounded-lg mb-4;
        }
    }    
</style>

<footer>
    <div class="nav-grid">
        <a href="/index">Poems</a>
        <a href="/publications">Books</a>
        <a href="/blog">Blog</a>
        <a href="/about">About Rik</a>
        <a href="/cookies">Cookies</a>
    </div>

    <button on:click={setupPayPalAction}>
        <img src="/images/donate-button.png" alt="Image button for PayPal donations to support the RikVerse website" />
    </button>

    <p>&copy;2020 Rik Roots. Site built and maintained by RikWorks.<br />
        Tech: <a href="https://svelte.dev/">Svelte</a> scaffold, <a href="https://visionmedia.github.io/page.js/">Page.js</a> routing, <a href="https://tailwindcss.com/">Tailwind</a> css</p>
</footer>
