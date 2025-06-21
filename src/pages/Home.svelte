<script>
	import PoemCard from '../components/PoemCard.svelte';

	import { updateMetadata } from '../handleMetadata';

	import { getRandomPoem } from '../utilities.js';

    updateMetadata({
        id: '',
        title: 'The RikVerse',
        tabTitle: 'The RikVerse',
        description: 'Poems, stories and novels by Rik Roots',
    });
</script>

<svelte:head>
    <title>The RikVerse</title>
</svelte:head>

<PoemCard poemData={getRandomPoem()} />
