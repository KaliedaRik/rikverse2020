<script>
    import NavigationLinks from './NavigationLinks.svelte';	
</script>

<style>
    nav {
        @apply pt-2 pb-2;
        background: rgb(2 0 36);
        background: linear-gradient(0deg, rgb(2 0 36) 0%, rgb(9 9 121) 5%, rgb(173 184 236) 38%, rgb(185 234 244) 100%);
    }

    div {
        width: 100%;
    }
    img {
        margin: 0 auto 1rem auto;
        width: 40%;
    }
    a {
        @apply w-full;
    }

    @media (min-width: 768px) {

        nav {
            @apply rounded-lg;
        }
    }
</style>

<nav>
    <div title="Click here to see a random poem">
        <a href="/">
            <img src="/images/rikverse-logo.webp" alt="RikVerse banner logo" />
        </a>
    </div>

    <NavigationLinks />
</nav>
