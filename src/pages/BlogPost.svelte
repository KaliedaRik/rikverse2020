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
        display: block;
        color: rgb(43 108 176);
        margin-top: -0.5rem;
        margin-bottom: 1rem;
    }
    time {
        display: block;
        font-style: italic;
        font-size: 0.875rem;
        margin: 0;
        margin-bottom: 1rem;
        padding-bottom: 1rem;
        border-bottom-width: 1px;
        border-bottom: 1px solid rgb(200 200 200);
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
