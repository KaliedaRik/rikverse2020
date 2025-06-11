<script>
    export let file;
    export let position;
    export let caption;
</script>

<style>
    /* For images associated with the poem - which can go ahead, or after, the verses */
    figcaption {
        font-size: 0.75rem;
        color: rgb(74 85 104);
        font-style: italic;
    }
    .top-image {
        border-top-width: 1px;
        border-color: rgb(160 174 192);
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding-top: 1rem;
        text-align: center;
    }
    .bottom-image {
        border-top-width: 1px;
        border-color: rgb(160 174 192);
        margin-left: auto;
        margin-right: auto;
        margin-top: 1rem;
        margin-bottom: 1rem;
        padding-top: 1rem;
        text-align: center;
    }
    .bottom-image img {
        max-width: 100%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 700px) {
        .bottom-image img {
            max-width: 600px;
        }
    }
</style>

<figure class="{position === 'bottom' ? 'bottom-image' : 'top-image'}">
    <img 
        src="{file}" 
        alt="{caption}" />
    <figcaption>{caption}</figcaption>
</figure>
