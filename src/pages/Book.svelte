<script>
    import bookData from '../data/bookData.mjs';

    import { 
        prettifyMonthDate, 
        scrollToTopOnLoad,
        navigateTo } from '../utilities.js';

    import { updateMetadata } from '../handleMetadata.js';

    export let params;

    let book = bookData.filter(item => item.id === params.slug);

    // Sanity check - does the book exist?
    if (book.length) {

    	book = book[0];

        updateMetadata(book);

    	scrollToTopOnLoad();
    }
    else navigateTo('/error');
</script>

<style>
    div {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 0 0;
    }
    p {
        font-style: italic;
    }
    img {
        display: block;
        padding-bottom: 1rem;
    }

    nav {
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
    }
    nav a {
        color: rgb(250 240 137);
        background-color: rgb(197 48 48);
        border-radius: 9999px;
        padding: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        transition: color 0.5s, background-color 0.5s;
    }
    nav a:hover {
        color: rgb(247 250 252);
        background-color: rgb(155 44 44);
    
    }

    time {
        color: rgb(113 128 150);
        font-size: 0.875rem;
        font-style: italic;
    }

    @media (min-width: 700px) {

        div {
            grid-template-columns: 1fr 1fr;
            grid-gap: 1rem 1rem;
        }

        nav {
            margin-top: 0.5rem;
        }

        img {
            padding: 0;
        }
    }
</style>

<svelte:head>
    <title>{book.tabTitle}</title>
</svelte:head>

<h1>{book.title}</h1>

<p>{book.description}</p>

<div>
    <img src="{book.coverimage}" alt="Cover for {book.title}" />

    <article>
        <nav><a href="/read/{book.id}" {book}>Read the book in RikVerse</a></nav>

        {@html book.blurb}

        <time datetime="{book.publishdate}">Published: {prettifyMonthDate(book.publishdate)}</time>
    </article>

    <section>

        <h3>Download this book</h3>

        {#if book.download_epub || book.download_mobi || book.download_pdf}
        <ul>
            {#if book.download_epub}
            <li>
                <a href="{book.download_epub}" type="application/epub+zip" download>
                    .ePub format
                </a> (for most eBook readers)
            </li>
            {/if}
            {#if book.download_mobi}
            <li>
                <a href="{book.download_mobi}" type="application/vnd.amazon.mobi8-ebook" download>
                    .mobi format
                </a> (for Kindle devices)
            </li>
            {/if}
            {#if book.download_pdf}
            <li>
                <a href="{book.download_pdf}" type="application/pdf" download>
                    .pdf format
                </a> (old-school offline eBook reading)
            </li>
            {/if}
        </ul>

        {:else}
        <p>Apologies - the book cannot be downloaded from this site</p>
        {/if}
    </section>

    <section>

        <h3>Get this book elsewhere</h3>

        {#if book.link_smashwords || book.link_ibook || book.link_gplay || book.link_amazon || book.link_lulu}
        <ul>
            {#if book.link_smashwords}
            <li>
                <a href="{book.link_smashwords}">Smashwords</a> (£FREE!)</li>
            {/if}
            {#if book.link_ibook}
                <li><a href="{book.link_ibook}">Apple Books</a> (£FREE!)</li>
            {/if}
            {#if book.link_gplay}
                <li><a href="{book.link_gplay}">Google Play Books</a> (£FREE!)</li>
            {/if}
            {#if book.link_amazon}
                <li><a href="{book.link_amazon}">Amazon</a> (eBook only - £costs-money)</li>
            {/if}
            {#if book.link_lulu}
                <li><a href="{book.link_lulu}">Lulu</a> (for hardcopy version - £costs-money)</li>
            {/if}
        </ul>

        {:else}
        <p>Apologies - the book cannot be downloaded or purchased from other sites</p>
        {/if}
    </section>

    {#if book.report_link != null}
        <section>
            <h3>LLM-generated academic report</h3>
            <ul>
                <li><a href="{book.report_link}" download>Download file</a></li>
            </ul>
            
        </section>
    {/if}
</div>
