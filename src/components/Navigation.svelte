<script>
    import NavigationLinks from './NavigationLinks.svelte';	
</script>

<style>
    nav {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        background: rgb(2 0 36);
        background: linear-gradient(0deg, rgb(2 0 36) 0%, rgb(9 9 121) 5%, rgb(173 184 236) 20%, rgb(185 234 244) 100%);
    }

    div {
        width: 100%;
    }
    img {
        margin: 0 auto 1rem auto;
        width: 40%;
        display: block;
    }

    @media (min-width: 768px) {

        nav {
            border-radius: 0.5rem;
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
