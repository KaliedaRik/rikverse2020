<script>
    import pageData from '../data/pageData.mjs';

    import PoemCard from '../components/PoemCard.svelte'

    import { getRandomPoem } from '../utilities.js'

    import { updateMetadata } from '../handleMetadata.js';

    let pageMetadata = pageData.filter(item => item.id === 'error')[0];

    updateMetadata(pageMetadata);
</script>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h1>Deepest apologies!</h1>

<p>It looks like we encountered an 'issue' while attempting to find the page you were looking for. As compensation, please enjoy this randomly selected poem instead:</p>

<PoemCard poemData={getRandomPoem()} />
