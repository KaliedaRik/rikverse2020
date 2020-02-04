<script>
    import pageData from '../data/pageData.mjs';

    let pageMetadata = pageData.filter(item => item.id === 'error')[0];
</script>

<style></style>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h3>This will be the error page</h3>
