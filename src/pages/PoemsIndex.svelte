<script>
	import pageData from '../data/pageData.mjs';

	let pageMetadata = pageData.filter(item => item.id === 'index')[0];
</script>

<style></style>

<svelte:head>
	<title>{pageMetadata.title}</title>
</svelte:head>

<h3>This will be the poems listings page</h3>

<p>Each listing will link to an individual poem</p>
