<script>
    import pageData from '../data/pageData.mjs';

    import PoemCard from '../components/PoemCard.svelte'

    import { getRandomPoem } from '../utilities.js'

    import { updateMetadata } from '../handleMetadata.js';

    let pageMetadata = pageData.filter(item => item.id === 'support')[0];

    updateMetadata(pageMetadata);
</script>

<style>
    button {
        display: block;
        width: 60%;
        margin: 2rem auto;
        padding: 0.5rem;
        background-color: rgb(0 0 220 / 1);
        color: yellow;
        border-radius: 9999px;
        font-size: 2rem;
        cursor: pointer;
        transition: background-color 0.5s;
        border: 2px solid black;

        &:hover {
            background-color: rgb(160 0 0 / 1);
        }
    }
    #donate {
        display: block;
        width: 60%;
        margin: 2rem auto;
        padding: 0.5rem;
        background-color: rgb(0 100 0 / 1);
        color: yellow;
        border-radius: 9999px;
        font-size: 2rem;
        cursor: pointer;
        transition: background-color 0.5s;
        text-align: center;
        text-decoration: none;
        border: 2px solid black;

        &:hover {
            background-color: rgb(160 0 0 / 1);
        }
    }

</style>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h1>Support the RikVerse</h1>

<p>This used to be the Cookie Consents page. Then Rik decided to throw all the cookies out into the street. Which meant that he also had to get rid of all the snazzy functionality behind his</p> 

<button>Big Blue Support Me Button</button>

<p>... which no longer does anything when you click it.</p>

<p>This doesn't mean that Rik has abandoned money. Rik likes money! If you would like to give Rik some money then <b>please feel free to hurl your loose change at him</b> via his</p>

<a id="donate" href="https://paypal.me/RichardRoots?country.x=GB&locale.x=en_GB">Big Green PayPal Donate Button</a>

<p>... which is a link to Rik's PayPal donations page.</p>

<hr />

<p>Whether you donate or not, as a thank you for visiting this page, please enjoy this randomly selected poem.</p>

<PoemCard poemData={getRandomPoem()} />
