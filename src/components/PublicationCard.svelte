<script>
    import { prettifyMonthDate } from '../utilities.js';

    export let book;
</script>

<style>
    a {
        @apply text-gray-700 no-underline;
        transition: color 0.5s;
    }
    a:hover {
        @apply text-green-700 no-underline;
    }

    div {
        height: 100%;
        @apply p-4 bg-gray-100 border border-solid border-gray-500 rounded-lg;
        transition: background-color 0.5s, border-color 0.5s;
    }
    div:hover {
        @apply bg-gray-200 border-gray-800;
    }

    h3 {
        @apply text-center p-0;
    }

    img {
        width: 100%;
        @apply mb-2;
    }

    p {
        @apply mb-2 italic;
    }

    time {
        @apply block mb-0 text-gray-700 text-sm text-center;
    }
</style>

<div>
    <a href="/book/{book.id}">
        <h3>{book.title}</h3>
        <img src="{book.coverimage}" alt="Cover for {book.title}" />
        <p>{book.description}</p>
        <time datetime="{book.publishdate}">Published: {prettifyMonthDate(book.publishdate)}</time>
    </a>
</div>
