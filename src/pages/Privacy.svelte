<script>
    import pageData from '../data/pageData.mjs';

    let pageMetadata = pageData.filter(item => item.id === 'privacy-and-security')[0];
</script>

<style></style>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h3>This is where the privacy and security text will go</h3>
