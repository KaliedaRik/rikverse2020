<script>
    import pageData from '../data/pageData.mjs';

    import PoemCard from '../components/PoemCard.svelte'

    import { 
        getRandomPoem,
        scrollToTopOnLoad } from '../utilities.js'

    import { updateMetadata } from '../handleMetadata.js';

    let pageMetadata = pageData.filter(item => item.id === 'privacy-and-security')[0];

    updateMetadata(pageMetadata);

    scrollToTopOnLoad();
</script>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h1>Privacy and Security Notice</h1>

<p><b>The RikVerse does not collect any of your personal data</b> for any reason whatsoever.</p>

<p>We do not store this non-existent data in a server, the cloud, or even a shoe box at the back of our poetry cupboard. We will never contact you, because we will never know who you are.</p>

<p>Additionally, this website no longer includes any functionality provided by third parties, which means we no longer have to care about cookies. Apologies if this disappoints you.</p>

<h3>Thank you for your time and attention. Please now enjoy this randomly selected poem:</h3>

<PoemCard poemData={getRandomPoem()} />
