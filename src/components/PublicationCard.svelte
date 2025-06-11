<script>
    import { prettifyMonthDate } from '../utilities.js';

    export let book;
</script>

<style>
    a {
        color: rgb(74 85 104);
        text-decoration: none;
        transition: color 0.5s;
    }
    a:hover {
        color: rgb(47 133 90);
        text-decoration: none;
    }

    div {
        padding: 1rem;
        background-color: rgb(247 250 252);
        border-width: 1px;
        border-style: solid;
        border-color: #a0aec0;
        border-color: rgb(160 174 192);
        border-radius: 0.5rem;
        transition: background-color 0.5s, border-color 0.5s;
    }
    div:hover {
        background-color: rgb(237 242 247);
        border-color: rgb(45 55 72);
    }

    h3 {
        text-align: center;
        padding: 0;
    }

    img {
        width: 100%;
        margin-bottom: 0.5rem;
    }

    p {
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-style: italic;
    }

    time {
        display: block;
        margin-bottom: 0;
        color: rgb(74 85 104);
        font-size: 0.875rem;
        text-align: center;
    }

    .book-report-separator {
        display: block;
        margin-top: 1rem;
    }
    .book-report {
        display: block;
        margin-top: 1rem;
    }
</style>

<div>
    <a href="/book/{book.id}">
        <h3>{book.title}</h3>
        <img src="{book.coverimage}" alt="Cover for {book.title}" />
        <p>{book.description}</p>
        <time datetime="{book.publishdate}">Published: {prettifyMonthDate(book.publishdate)}</time>
    </a>
    {#if book.report_link != null}
        <hr class="book-report-separator">
        <a href="{book.report_link}" target="_BLANK" class="book-report">Book details</a>
    {/if}
</div>
