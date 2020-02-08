<script>
    import blogpostData from '../data/blogpostData.mjs';

    import { 
        prettifyDate, 
        scrollToTopOnLoad,
        navigateTo } from '../utilities.js';

    import { updateMetadata } from '../handleMetadata.js';

    // This line lets us access the :slug value which Page.js has supplied to the component
    export let params;

    let post = '';

    let postData = blogpostData.filter(item => item.id === params.slug);

    // Sanity check - does the post exist?
    if (postData.length) {

        postData = postData[0];

        updateMetadata(postData);

        // Fetch the blog post's content (stored on the server in an html file)
        fetch(`/posts/${params.slug}.html`)
        .then(res => res.text())
        .then(res => {

            post = res;

            scrollToTopOnLoad();
        })
        .catch(error => console.log(error.message));
    }
    else navigateTo('/error');

</script>

<style>
    summary {
        @apply text-blue-700 italic mb-2;
    }
    time {
        @apply block text-sm m-0 mb-4 pb-4 border-b;
    }
</style>

<svelte:head>
    <title>{postData.tabTitle}</title>
</svelte:head>

<h1>{postData.title}</h1>

<summary>{postData.description}</summary>

<time datetime="{postData.publishdate}">Published: {prettifyDate(postData.publishdate)}</time>

<!-- 
    This is dangerous! 
    Never output raw html markup from an untrusted source! 
-->
<article>
    {@html post}
</article>
