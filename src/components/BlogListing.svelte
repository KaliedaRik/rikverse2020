<script>
    import { prettifyDate } from '../utilities.js';

    // Svelte uses 'export' to identify attributes that this component can import and use
    // - in this case, we're expecting to import a Javascript object
    export let listing;
</script>

<style>
    div {
        @apply pl-0;
        transition: padding-left 0.5s;
    }
    div:hover {
        @apply pl-2;
    }
    a {
        @apply text-gray-900 no-underline;
        transition: color 0.5s;
    }
    a:hover {
        @apply text-green-700 no-underline pl-12;
    }
    h3 {
        @apply mb-0;
    }
    p {
        @apply italic whitespace-pre-wrap m-0 mb-4;
    }
    time {
        @apply block text-sm whitespace-pre-wrap m-0;
    }
</style>

<div>
    <a href="/blog/{listing.id}">
        <h3>{listing.title}</h3>
        <time datetime="{listing.publishdate}">{prettifyDate(listing.publishdate)}</time>
        <p>{listing.description}</p>
    </a>
</div>
