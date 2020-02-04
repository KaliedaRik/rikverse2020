<script>
    import blogpostData from '../data/blogpostData.mjs';

    import { 
        prettifyDate, 
        scrollToTopOnLoad, 
        updateMetadata } from '../utilities.js';

    export let params;

    let post = '';

    let postData = blogpostData.filter(item => item.id === params.slug);

    console.log(postData);

    if (postData.length) {

        postData = postData[0];

        updateMetadata(postData);

        fetch(`/posts/${params.slug}.html`)
        .then(res => res.text())
        .then(res => {

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
	<title>{postData.tabTitle}</title>
</svelte:head>

<h1>{postData.title}</h1>

<p class="summary">{postData.description}</p>

<p class="publishdate">Published: {prettifyDate(postData.publishdate)}</p>

{@html post}
