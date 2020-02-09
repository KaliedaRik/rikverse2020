<script>
  import { checkCopyright } from '../utilities.js'

  export let listing;

  let licence = checkCopyright(listing.publishdate, listing.complete);
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
    @apply m-0;
  }
  q {
    @apply block italic whitespace-pre-wrap m-0;
  }
  p {
    @apply text-sm whitespace-pre-wrap m-0 mb-4;
  }
  img {
    height: 1rem;
    @apply inline-block m-0;
  }
</style>

<div>
  <a href="/poem/{listing.id}">
    <h3>{listing.title}</h3>
    <q>{listing.description}</q>
    <p>
      {#if licence.length}
      <img src="{licence}" alt="Creative Commons licence" /> {listing.statusText}
      {:else}
      {listing.statusText}
      {/if}
    </p>
  </a>
</div>
