<script>
    import pageData from '../data/pageData.mjs';

    import PoemCard from '../components/PoemCard.svelte'

    import { getRandomPoem } from '../utilities.js'

    import { updateMetadata } from '../handleMetadata.js';

    let pageMetadata = pageData.filter(item => item.id === 'cookies')[0];

    updateMetadata(pageMetadata);
</script>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h1>Cookie consents on the RikVerse site</h1>

<p>There are no cookies on the RikVerse website. There used to be cookies, but things got messy so we removed them. To compensate you for the loss of cookies, please enjoy this random poem instead.</p>

<PoemCard poemData={getRandomPoem()} />
