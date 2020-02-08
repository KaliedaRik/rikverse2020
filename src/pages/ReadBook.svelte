<script>
    import bookData from '../data/bookData.mjs';

    import { 
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

<style></style>

<svelte:head>
    <title>{book.tabTitle}</title>
</svelte:head>

<h1>{book.title}</h1>
<p>{book.description}</p>

<div class="pdf-viewer">

    {#if book.download_pdf}
    <object 
        data="{book.download_pdf}" 
        title="RikVerse embedded pdf file reader" 
        type="application/pdf" 
        width="100%" 
        height="600px">

        <section>Oops! It looks like your browser doesn't support viewing pdf files. The good news is you can download this book for reading later.</section>

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
    </object>

    {:else}
        <section>My apologies - I don't have a pdf file of this book available for online reading. Instead you can download this book in the following formats, for reading later.</section>

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
        </ul>
    {/if}
</div>
