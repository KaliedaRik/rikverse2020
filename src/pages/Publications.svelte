<script>
    import pageData from '../data/pageData.mjs';
    import bookData from '../data/bookData.mjs';

    import PublicationCard from '../components/PublicationCard.svelte';

    import { updateMetadata } from '../handleMetadata.js';

    let pageMetadata = pageData.filter(item => item.id === 'publications')[0];

    updateMetadata(pageMetadata);
</script>

<style>
    h1, h2 {
        text-align: center;
    }

    section {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1em 1em;
        grid-auto-flow: row;
    }

    @media (min-width: 700px) {
        section {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h1>Poetry Chapbooks</h1>

<section>
    {#each bookData as book}
        {#if book.is_chapbook}
        <PublicationCard {book} />
        {/if}
    {/each}
</section>

<h2>&nbsp;</h2>

<h1>Other publications</h1>

<section>
    {#each bookData as book}
        {#if !book.is_chapbook}
        <PublicationCard {book} />
        {/if}
    {/each}
</section>
