<script>
    import pageData from '../data/pageData.mjs';

    import Footer from '../components/Footer.svelte';

    let pageMetadata = pageData.filter(item => item.id === 'publications')[0];
</script>

<style></style>

<svelte:head>
    <title>{pageMetadata.title}</title>
</svelte:head>

<main>
    <h3>This will be the publication listings page</h3>

    <p>Each listing will link to an individual book page</p>
</main>

<Footer />
