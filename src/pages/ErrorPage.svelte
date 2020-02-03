<script>
    import pageData from '../data/pageData.mjs';

    import Footer from '../components/Footer.svelte';

    let pageMetadata = pageData.filter(item => item.id === 'error')[0];
</script>

<style></style>

<svelte:head>
    <title>{pageMetadata.title}</title>
</svelte:head>

<main>
    <h3>This will be the error page</h3>
</main>

<Footer />
