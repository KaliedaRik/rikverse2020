<script>
    export let file;
    export let position;
    export let caption;
</script>

<style>
    /* For images associated with the poem - which can go ahead, or after, the verses */
    figcaption {
        @apply text-xs text-gray-700 italic;
    }
    .top-image {
    /* thinking of keeping all images to the bottom - except maybe where the poem IS the image? */
    }
    .bottom-image {
        @apply border-t border-gray-500 mx-auto my-4 pt-4 text-center;
    }
    .bottom-image img {
        @apply max-w-full block mx-auto;
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
