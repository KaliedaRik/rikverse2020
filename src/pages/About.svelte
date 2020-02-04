<script>
    import pageData from '../data/pageData.mjs';

    let pageMetadata = pageData.filter(item => item.id === 'about')[0];
</script>

<style></style>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h3>This will be the Author biography page</h3>
