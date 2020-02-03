<script>
	import pageData from '../data/pageData.mjs';

	let pageMetadata = pageData.filter(item => item.id === 'blog')[0];
</script>

<style></style>

<svelte:head>
	<title>{pageMetadata.title}</title>
</svelte:head>

<h3>This will be the blog listings page</h3>

<p>Each listing will link to an individual blog post</p>
