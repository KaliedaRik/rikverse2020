<script>
    import pageData from '../data/pageData.mjs';

    import { updateMetadata } from '../utilities.js'

    let pageMetadata = pageData.filter(item => item.id === 'error')[0];

    updateMetadata(pageMetadata);
</script>

<style></style>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h1>Deepest apologies!</h1>

<p>it looks like we encountered an 'issue' while attempting to find the page you were looking for. As compensation, please enjoy this randomly selected poem instead:</p>

<p>[Random poem panel to go here]</p>
