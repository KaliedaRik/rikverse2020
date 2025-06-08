<script>
    import pageData from '../data/pageData.mjs';
    import poemData from '../data/poemData.mjs';

    import PoemListing from '../components/PoemListing.svelte';

    import { 
        updateMetadata,
        poemIndexHash } from '../handleMetadata.js';

    // Update page metadata
    let pageMetadata = pageData.filter(item => item.id === 'index')[0];
    updateMetadata(pageMetadata);

    // Get poem tags
    let taglist = poemData.reduce((arr, item) => arr = [...arr, ...item.tags], []);
    taglist = [...new Set(taglist)];
    taglist.sort();

    // Function to filter poems by tag
    let filteredPoems, 
        completedPoems = [],
        draftPoems = [];

    const filterPoems = (tag) => {

        if (tag && tag.indexOf('#') == 0) tag = tag.substring(1);

        if (tag) filteredPoems = poemData.filter(item => item.tags.indexOf(tag) >= 0);
        else filteredPoems = poemData;

        completedPoems = filteredPoems.filter(item => item.complete);
        if (tag) draftPoems = filteredPoems.filter(item => !item.complete);

        poemIndexHash.set(tag);
    }

    filterPoems($poemIndexHash);

    // Function to handle tag button clicks
    const buttonAction = (e) => filterPoems(e.target.getAttribute('tag'));
</script>

<style>
    div {
        @apply text-center mb-4;
    }
    button {
        @apply inline-block rounded-full bg-blue-200 text-green-700 border-blue-500 p-1 m-1 text-center cursor-pointer text-sm outline-none;
        min-width: 6rem;
        transition: color 0.5s, background-color 0.5s;
    }
    button:hover {
        @apply bg-blue-700 text-green-200;
    }

    .current-filter {
        @apply text-yellow-300 bg-red-700;
    }

    h2 {
        @apply border-t-2;
    }
</style>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h1>Rik's Poems</h1>

{#if !filteredPoems.length}
<p>There are no poems tagged with <b>#{$poemIndexHash}</b> - please search again</p>
{:else}
    {#if $poemIndexHash}
    <p>... Listing poems tagged with <b>#{$poemIndexHash}</b>:</p>
    {:else}
    <p>... Listing <b>all</b> poems:</p>
    {/if}
{/if}

<div>
	<button 
        type="button" 
        on:click={buttonAction} 
        class="{!$poemIndexHash && 'current-filter'}">
        All poems
    </button>
	{#each taglist as tag}
		<button 
            type="button" 
            {tag} 
            on:click={buttonAction} 
            class="{$poemIndexHash === tag && 'current-filter'}">
            #{tag}
        </button>
	{/each}
</div>

{#if filteredPoems.length}

    {#if completedPoems.length}
        <h2>Completed poems</h2>

        {#each completedPoems as listing}
            <PoemListing {listing} />
        {/each}
    {:else}
        <h2>No completed poems to list at this time</h2>
    {/if}

    {#if draftPoems.length}
        <h2>Poems still in draft</h2>

        {#each draftPoems as listing}
            <PoemListing {listing} />
        {/each}
    {/if}

{/if}
