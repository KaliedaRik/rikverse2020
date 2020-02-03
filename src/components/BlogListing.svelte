<script>
    import { prettifyDate } from '../utilities.js';

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
    .firstline {
        @apply italic whitespace-pre-wrap m-0 mb-4;
    }
    .date {
        @apply text-sm whitespace-pre-wrap m-0;
    }
</style>

<div>
  <a href="/blog/{listing.id}" {listing}>
    <h3>{listing.title}</h3>
    <p class="date">{prettifyDate(listing.publishdate)}</p>
    <p class="firstline">{listing.description}</p>
  </a>
</div>
