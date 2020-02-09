<script>
	import poemData from '../data/poemData.mjs';

    import { 
    	scrollToTopOnLoad,
        navigateTo } from '../utilities.js';

    import { updateMetadata } from '../handleMetadata.js';

	import PoemCard from '../components/PoemCard.svelte';

	export let params;

    let poem = poemData.filter(item => item.id === params.slug)[0];

    if (!poem) navigateTo('/index');
    else {

        updateMetadata(poem);
        scrollToTopOnLoad();
    }
</script>

<style></style>

<PoemCard poemData={poem} />
