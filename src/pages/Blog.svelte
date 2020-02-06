<script>
    import pageData from '../data/pageData.mjs';
    import blogpostData from '../data/blogpostData.mjs';

    import BlogListing from '../components/BlogListing.svelte';

    import { updateMetadata } from '../utilities.js';

    let pageMetadata = pageData.filter(item => item.id === 'blog')[0];

    updateMetadata(pageMetadata);

    // We store dates in the format 'YYYY-MM-DD'
    // - this gives us today's date in the same format
    let date = new Date();
    date = date.toISOString().split('T')[0];

    // "Sticky" posts (identified with 'publishdate' == 'today') go at the top of the listing
    let topPosts = blogpostData.filter(item => item.publishdate.indexOf('Today') >= 0);

    // All other posts, excluding future-dated ones
    let posts = blogpostData.filter(item => item.publishdate <= date);

    // Sort top posts alphabetically, blogposts by date descending - most recent first
    topPosts.sort((a, b) => b.title < a.title ? 1 : -1);
    posts.sort((a, b) => b.publishdate > a.publishdate ? 1 : -1);
</script>

<style>
    h1 {
        @apply mb-2
    }
    p {
        @apply border-b pb-4 mb-0;
    }
</style>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h1>The RikVerse Blog</h1>

<p>Where Rik contemplates stuff about poetry, writing, publishing and occasional dragon sightings.</p>

{#each topPosts as listing}
<div>
    <BlogListing {listing} />
</div>
{/each}

{#each posts as listing}
<div>
    <BlogListing {listing} />
</div>
{/each}
