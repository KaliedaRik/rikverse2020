<script>
	import poemData from '../data/poemData.mjs';

    import { 
    	scrollToTopOnLoad,
        navigateTo } from '../utilities.js';

    import { updateMetadata } from '../handleMetadata.js';

	import PoemCard from '../components/PoemCard.svelte';

	export let params;

    let poem = poemData.filter(item => item.id === params.slug);

    if (poem.length) {

        poem = poem[0];
        updateMetadata(poem);
        scrollToTopOnLoad();
    }
    else navigateTo('/error');
</script>

<svelte:head>
    <title>{poem.tabTitle}</title>
</svelte:head>

<PoemCard poemData={poem} />
