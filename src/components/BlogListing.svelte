<script>
    import { prettifyDate } from '../utilities.js';

    // Svelte uses 'export' to identify attributes that this component can import and use
    // - in this case, we're expecting to import a Javascript object
    export let listing;
</script>

<style>
    a {
        color: rgb(26 32 44);
        text-decoration: none;
        transition: color 0.5s;
    }
    a:hover {
        color: rgb(47 133 90);
    }
    h3 {
        margin-bottom: 0;
    }
    p {
        font-style: italic;
        white-space: pre-wrap;
        margin: 0;
        margin-bottom: 1rem;
    }
    time {
        display: block;
        font-size: 0.875rem;
        white-space: pre-wrap;
        margin: 0;
    }
</style>

<div>
    <a href="/blog/{listing.id}">
        <h3>{listing.title}</h3>
        <time datetime="{listing.publishdate}">{prettifyDate(listing.publishdate)}</time>
        <p>{listing.description}</p>
    </a>
</div>
