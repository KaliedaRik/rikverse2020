<script>
    import pageData from '../data/pageData.mjs';

    let pageMetadata = pageData.filter(item => item.id === 'index')[0];
</script>

<style></style>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h1>This will be the poems listings page</h1>

<p>Each listing will link to an individual poem</p>
