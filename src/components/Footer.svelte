<style>
    footer {
        background-color: rgb(44 82 130);
        padding-top: 1rem;
        padding-bottom: 1rem;
    }
    p {
        font-size: 0.875rem;
        text-align: center;
        color: rgb(160 174 192);
        margin: 0;
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid rgb(200 200 200 / 0.3);
    }
    a {
        color: rgb(237 242 247);
        text-decoration: none;
        transition: color 0.5s;
    }
    a:hover {
        text-decoration: underline;
        color: #fffc00;
    }

    @media (min-width: 768px) {
        footer {
            border-radius: 0.5rem;
            margin-bottom: 1rem;
        }
    }    
</style>

<script>
    import NavigationLinks from './NavigationLinks.svelte';
</script>

<footer>
    <NavigationLinks />

    <p>&copy;2025 Rik Roots. Site built and maintained by RikWorks.<br />
        Tech: <a href="https://svelte.dev/">Svelte</a> scaffold, <a href="https://visionmedia.github.io/page.js/">Page.js</a> routing</p>
</footer>
