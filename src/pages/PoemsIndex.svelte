<script>
    import pageData from '../data/pageData.mjs';
    import poemData from '../data/poemData.mjs';

    import PoemListing from '../components/PoemListing.svelte';

    import { 
        updateMetadata,
        poemIndexHash,
    } from '../handleMetadata.js';

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
        text-align: center;
        margin-bottom: 1rem;
    }
    button {
        display: inline-block;
        border-radius: 9999px;
        background-color: rgb(190 227 248);
        color: rgb(47 133 90);
        border-width: 1px;
        border-color: rgb(66 153 225);
        padding: 0.25rem 1rem;
        margin: 0.25rem;
        text-align: center;
        cursor: pointer;
        font-size: 0.875rem;
        outline: 2px solid transparent;
        outline-offset: 2px;
        min-width: 6rem;
        transition: color 0.5s, background-color 0.5s;
    }
    button:hover {
        background-color: rgb(43 108 176);
        color: rgb(198 246 213);
    }

    .current-filter {
        color: rgb(250 240 137);
        background-color: rgb(197 48 48);
    }

    h2 {
        border-top-width: 2px;
    }
</style>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h1>Rik's Works</h1>

{#if !filteredPoems.length}
<p>There are no works tagged with <b>#{$poemIndexHash}</b> - please search again</p>
{:else}
    {#if $poemIndexHash}
    <p>... Listing works tagged with <b>#{$poemIndexHash}</b>:</p>
    {:else}
    <p>... Listing <b>all</b> works:</p>
    {/if}
{/if}

<div>
	<button 
        type="button" 
        on:click={buttonAction} 
        class="{!$poemIndexHash && 'current-filter'}">
        All works
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
        <h2>Completed works</h2>

        {#each completedPoems as listing}
            <PoemListing {listing} />
        {/each}
    {:else}
        <h2>No completed works to list at this time</h2>
    {/if}

    {#if draftPoems.length}
        <h2>Works still in draft</h2>

        {#each draftPoems as listing}
            <PoemListing {listing} />
        {/each}
    {/if}

{/if}
