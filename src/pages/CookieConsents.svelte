<script>
    import pageData from '../data/pageData.mjs';

    import Footer from '../components/Footer.svelte';

    let pageMetadata = pageData.filter(item => item.id === 'cookies')[0];
</script>

<style></style>

<svelte:head>
    <title>{pageMetadata.title}</title>
</svelte:head>

<main>
    <h3>This will be the cookie consents page</h3>

    <p>It is on this page that the user will find a link to the <a href="/privacy-and-security">privacy and security page</a>.</p>
</main>

<Footer />
