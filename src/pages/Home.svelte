<script>
	import PoemCard from '../components/PoemCard.svelte';

	import { updateMetadata } from '../handleMetadata';

	import { getRandomPoem } from '../utilities.js';

    updateMetadata({
        id: '',
        title: 'The RikVerse',
        tabTitle: 'The RikVerse',
        description: 'Poems, stories and novels by Rik Roots',
        imageUrl: '/images/RV-home_share.png',
        imageText: 'Image advertising the RikVerse website landing page',
    });
</script>

<style></style>

<svelte:head>
    <title>The RikVerse</title>
</svelte:head>

<PoemCard poemData={getRandomPoem()} />
