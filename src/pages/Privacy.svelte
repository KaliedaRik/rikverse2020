<script>
    import pageData from '../data/pageData.mjs';

    import { updateMetadata } from '../utilities.js'

    let pageMetadata = pageData.filter(item => item.id === 'privacy-and-security')[0];

    updateMetadata(pageMetadata);
</script>

<style></style>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h1>Privacy and Security Notice</h1>

<p><b>The RikVerse does not collect any of your personal data</b> for any reason whatsoever.</p>

<p>We do not store this non-existent data in a server, the cloud, or even a shoe box at the back of our poetry cupboard. We will never contact you, because we will never know who you are.</p>

<p>This website does include some functionality provided by third parties: YouTube/Google (for videos); Facebook and Twitter (for sharing stuff); and PayPal - should you ever feel the need to donate some money to help maintain this website.</p>

<p>These services all run on <b>Cookies</b> - which are <b>disabled by default</b>. You have to go to the <a href="/cookies">Rikverse Cookies Page</a> and give your explicit permission before those companies start doing weird cookie-related stuff across the RikVerse.</p>

<p>More information about cookies (if you need it) can be found in this RikVerse <a href="/blog/cookies">blog post</a></p>

<h3>Thank you for your time and attention. Please now enjoy this randomly selected poem:</h3>

<p>[Random poem panel to go here]</p>
