<style>
    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1em 1em;
        grid-auto-flow: row;
        @apply mb-4 border-gray-400 border-b pb-4;
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

<p>You're (probably) seeing this page because you've either attempted to <b>share a RikVerse page</b> to social media, or <b>make a donation</b> to help Rik keep the RikVerse website going (thank you!)</p>

<p>Before you can complete these actions, <b>you need to agree</b> to let Facebook, Twitter and/or PayPal <b>add some cookies to your device</b> so they can keep track of what is going on.</p>

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

<p><b>PayPal donation button</b> - The donate button that appears at the bottom of every page on this site will, if you agree to cookies, take you to the PayPal site where you can make a donation - it may also try to log you into their site automatically. Details on what PayPal use their cookies for is scant, but I assume it's something to do with protecting us both when you try to give me some money. </p>

<p>If you decide against PayPal cookies, the button will instead take you to my <a href="https://paypal.me/RichardRoots?locale.x=en_GB">PayPal.me</a> page to make a donation. If you do chose to donate - thank you! If not, that's fine too: please continue to enjoy my work (for £free) on this site.</p>

<div>
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
</div>

<p><b>Facebook social media share button</b> - the Facebook share buttons on this site won't work until you accept Facebook cookies. If you choose not to allow those cookies, the share buttons will be hidden. I have absolutely no idea what data Facebook gathers about you via their cookies; here's a link to the <a href="https://www.facebook.com/business/m/one-sheeters/gdpr-developer-faqs:">Facebook GDPR page</a> where they try to explain it themselves.</p>

<div>
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
</div>

<p><b>Twitter social media tweet button</b> - As part of its Tweeting mechanism, Twitter will add cookies to this site to make their Tweet button work. If you choose to disable these cookies, the Tweet buttons will disappear from your view of this site. Twitter supply some good information on what they use their cookies for <a href="https://help.twitter.com/en/rules-and-policies/twitter-cookies">on their website</a>.</p>

<div>
    {#if $twitterCookies === 'no'}
    <button class="choice-button-no">Twitter cookies blocked</button>
    {:else}
    <button class="choice-button" on:click={twitter_NO_action}>
        My Twitter followers don't need to know about the RikVerse
    </button>
    {/if}

    {#if $twitterCookies === 'yes'}
    <button class="choice-button-yes">Twitter cookies allowed</button>
    {:else}
    <button class="choice-button" on:click={twitter_YES_action}>
        I feel a great desire to share RikVerse pages with my Twitter followers
    </button>
    {/if}

</div>

<p><b>Remembering your cookie choices</b> - if you want, we can save your cookie choices in your browser's  local storage so that the site automatically remembers them the next time you visit.</p>

<div>
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
