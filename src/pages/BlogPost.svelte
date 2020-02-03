<script>
    import blogpostData from '../data/blogpostData.mjs';

    import { 
        prettifyDate, 
        scrollToTopOnLoad, 
        updateMetadata } from '../utilities.js';

    import Footer from '../components/Footer.svelte';

    export let params;

    let post = {
        title: '',
    };

    let postData = blogpostData.filter(item => item.id === params.slug);

    if (postData.length) {

        updateMetadata(postData);

        fetch(`/posts/${params.slug}.json`)
        .then(res => res.json())
        .then(res => {

            res.publishdate = prettifyDate(res.publishdate);
            post = res;

            scrollToTopOnLoad();
        })
        .catch(error => console.log(error.message));
    }
</script>

<style>
    .summary {
        @apply text-blue-700 italic mb-1;
    }
    .publishdate {
        @apply text-sm m-0 mb-4 pb-4 border-b;
    }
</style>

<svelte:head>
	<title>RikVerse Blog</title>
</svelte:head>

<main>
	{#if post.title}
		<h1>{post.title}</h1>

		<p class="summary">{post.summary}</p>

		<p class="publishdate">Published: {post.publishdate}</p>

		{@html post.post}
	{:else}
		<p>Retrieving article</p>
	{/if}
</main>

<Footer />
