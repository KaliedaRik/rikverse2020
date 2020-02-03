<script>
    import pageData from '../data/pageData.mjs';

    import Footer from '../components/Footer.svelte';

    let pageMetadata = pageData.filter(item => item.id === 'privacy-and-security')[0];
</script>

<style></style>

<svelte:head>
    <title>{pageMetadata.title}</title>
</svelte:head>

<main>
    <h3>This is where the privacy and security text will go</h3>
</main>

<Footer />
