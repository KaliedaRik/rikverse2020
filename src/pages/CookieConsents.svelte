<style>
    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1em 1em;
        grid-auto-flow: row;
        @apply mb-4 border-gray-400 border-t-2 border-b-2 py-4;
    }

    button {
        @apply block w-full rounded-lg bg-blue-200 text-green-700 border-blue-500 p-1 text-sm text-center cursor-pointer;
        line-height: 1.3;
        transition: color 0.5s, background-color 0.5s;
    }
    button:hover {
        @apply bg-blue-700 text-green-200;
    }

    .action-button {
        @apply block w-9/12 text-lg mx-auto mb-4;
    }

    .choice-button-yes {
        @apply bg-green-700 text-yellow-300 border-green-500;
    }
    .choice-button-yes:hover {
        @apply bg-yellow-300 text-green-700;
    }

    .choice-button-no {
        @apply bg-red-700 text-yellow-300 border-red-500;
    }
    .choice-button-no:hover {
        @apply bg-yellow-300 text-red-700;
    }
</style>

<script>
    import pageData from '../data/pageData.mjs';

    let pageMetadata = pageData.filter(item => item.id === 'cookies')[0];

    import { 
        multisession,

        paypalCookies,
        facebookCookies,
        twitterCookies,
        youtubeCookies,

        allCookiesMultiYes,
        allCookiesSingleYes,
        allCookiesSingleNo,

        enableMultiSession,
        disableMultiSession } from '../handleCookies.js';

    import { 
        scrollToTopOnLoad,
        navigateBack } from '../utilities.js'

    // Big buttons
    const multisession_allcookies_YES_action = () => {

        allCookiesMultiYes();
        navigateBack();
    };
    const singlesession_allcookies_YES_action = () => {

        allCookiesSingleYes();
        navigateBack();
    };
    const allcookies_NO_action = () => {

        allCookiesSingleNo();
        navigateBack();
    };

    // YouTube/Google
    const youtube_NO_action = () => youtubeCookies.setTo('no');
    const youtube_YES_action = () => youtubeCookies.setTo('yes');

    // PayPal
    const paypal_NO_action = () => paypalCookies.setTo('no');
    const paypal_YES_action = () => paypalCookies.setTo('yes');

    // Facebook
    const facebook_NO_action = () => facebookCookies.setTo('no');
    const facebook_YES_action = () => facebookCookies.setTo('yes');

    // Twitter
    const twitter_NO_action = () => twitterCookies.setTo('no');
    const twitter_YES_action = () => twitterCookies.setTo('yes');

    // Multi session memory
    const multisession_NO_action = () => disableMultiSession();
    const multisession_YES_action = () => enableMultiSession();

    const leaveCookiePage_action = () => navigateBack();

    scrollToTopOnLoad();

</script>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h1>Cookie consents on the RikVerse site</h1>

<p>You're (probably) seeing this page because you've either attempted to <b>view a RikVerse video</b>, or <b>share a RikVerse page</b> to social media, or <b>make a donation</b> to help Rik keep the RikVerse website going (thank you!)</p>

<p>Before you can complete these actions, <b>you need to agree</b> to let YouTube/Google, Facebook, Twitter and/or PayPal <b>add some cookies to your device</b> so they can keep track of what is going on.</p>

<p>The RikVerse website blocks all Third Party cookies by default, until you agree to them - <b>click or tap on some buttons</b> below to make your choices known.</p>

<button class="action-button" on:click={multisession_allcookies_YES_action}>
    Allow all cookies and remember choice for future visits
</button>

<button class="action-button" on:click={singlesession_allcookies_YES_action}>
    Allow all cookies for this visit only
</button>

<button class="action-button" on:click={allcookies_NO_action}>
    Refuse all cookies (for this visit only)
</button>

<h3>Individual cookie choices</h3>

<div>
    <!-- YouTube/Google video cookies -->
    {#if $youtubeCookies === 'no'}
    <button class="choice-button-no">YouTube cookies blocked</button>
    {:else}
    <button class="choice-button" on:click={youtube_NO_action}>
        I don't need to watch no <i>steenkin'</i> videos!
    </button>
    {/if}

    {#if $youtubeCookies === 'yes'}
    <button class="choice-button-yes">YouTube cookies allowed</button>
    {:else}
    <button class="choice-button" on:click={youtube_YES_action}>
        Yes I would like to see videos of Rik reading his poems
    </button>
    {/if}

    <!-- PayPal donation cookies -->
    {#if $paypalCookies === 'no'}
    <button class="choice-button-no">PayPal cookies blocked</button>
    {:else}
    <button class="choice-button" on:click={paypal_NO_action}>
        Rik can starve for all I care!
    </button>
    {/if}

    {#if $paypalCookies === 'yes'}
    <button class="choice-button-yes">PayPal cookies allowed</button>
    {:else}
    <button class="choice-button" on:click={paypal_YES_action}>
        Yes I would like the opportunity to give Rik some money
    </button>
    {/if}

    <!-- Facebook social media share cookies -->
    {#if $facebookCookies === 'no'}
    <button class="choice-button-no">Facebook cookies blocked</button>
    {:else}
    <button class="choice-button" on:click={facebook_NO_action}>
        My Facebook Friends don't need to know about the RikVerse
    </button>
    {/if}

    {#if $facebookCookies === 'yes'}
    <button class="choice-button-yes">Facebook cookies allowed</button>
    {:else}
    <button class="choice-button" on:click={facebook_YES_action}>
        Yes I would like to share RikVerse pages with my Facebook Friends
    </button>
    {/if}

    {#if $twitterCookies === 'no'}
    <button class="choice-button-no">Twitter cookies blocked</button>
    {:else}
    <button class="choice-button" on:click={twitter_NO_action}>
        My Twitter followers don't need to know about the RikVerse
    </button>
    {/if}

    <!-- Twitter social media share cookies -->
    {#if $twitterCookies === 'yes'}
    <button class="choice-button-yes">Twitter cookies allowed</button>
    {:else}
    <button class="choice-button" on:click={twitter_YES_action}>
        I feel a great desire to share RikVerse pages with my Twitter followers
    </button>
    {/if}

    {#if $multisession === 'no'}
    <button class="choice-button-no">Local storage disabled</button>
    {:else}
    <button class="choice-button" on:click={multisession_NO_action}>
        No I don't want this site to remember my choices
    </button>
    {/if}

    {#if $multisession === 'yes'}
    <button class="choice-button-yes">Local storage enabled</button>
    {:else}
    <button class="choice-button" on:click={multisession_YES_action}>
        Yes I do want this site to remember my choices
    </button>
    {/if}
</div>

<button class="action-button" on:click={leaveCookiePage_action}>
    Save your choices and return to the previous page
</button>

<p>More information about RikVerse cookies can be found in this <a href="/blog/cookies">blog post</a>. And - for the dedicated visitor - we also have this <a href="/privacy-and-security">Privacy and Security</a> notice for you to enjoy!</p>

<p>Finally: further guidance on the use of cookies (and why you have to explicitly agree to them) can be found on the <a href="https://ico.org.uk/for-organisations/guide-to-pecr/guidance-on-the-use-of-cookies-and-similar-technologies/">UK Information Commissioner's Office website</a>. Please don't blame the RikVerse for all this palaver!</p>
