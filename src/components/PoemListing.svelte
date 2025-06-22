<script>
  import { checkCopyright } from '../utilities.js'

  export let listing;

  let licence = checkCopyright(listing.publishdate, listing.complete);
</script>

<style>
  a {
    color: rgb(26 32 44);
    text-decoration: none;
    transition: color 0.5s;
  }
  a:hover {
    color: rgb(47 133 90);
    text-decoration: none;
  }
  
  h3 {
    margin: 0;
  }
  q {
    display: block;
    font-style: italic;
    white-space: pre-wrap;
    margin: 0;
    margin-bottom: 0.25rem;
  }
  p {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    margin: 0;
    margin-bottom: 1rem;
  }
  img {
    height: 1rem;
    display: inline-block;
    margin: 0;
  }
  span {
    white-space: pre-wrap;
    padding-left: 0.5rem;
  }
</style>

<div>
  <a href="/poem/{listing.id}">
    <h3>{listing.title}</h3>
    <q>{listing.description}</q>
    <p>
      {#if listing.complete && licence.length}
        <img src="{licence}" alt="Creative Commons licence" /> <span>{listing.statusText || ''}</span>
      {:else}
        Unpublished draft
      {/if}
    </p>
  </a>
</div>
