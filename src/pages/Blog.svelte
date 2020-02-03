<script>
    import pageData from '../data/pageData.mjs';
    import blogpostData from '../data/blogpostData.mjs';

    import BlogListing from '../components/BlogListing.svelte';
    import Footer from '../components/Footer.svelte';

    let pageMetadata = pageData.filter(item => item.id === 'blog')[0];

    // Exclude future-dated blog posts
    let date = new Date();
    date = date.toISOString().split('T')[0];

    let topPosts = blogpostData.filter(item => item.publishdate.indexOf('Today') >= 0);
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
    <title>{pageMetadata.title}</title>
</svelte:head>

<main>
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
</main>

<Footer />
