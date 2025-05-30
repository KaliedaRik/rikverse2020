<script>
    import pageData from '../data/pageData.mjs';

    import { updateMetadata } from '../handleMetadata.js';

    let pageMetadata = pageData.filter(item => item.id === 'about')[0];

    updateMetadata(pageMetadata);
</script>

<style>
	img {
		float: right;
		padding: 0 0 1rem 1rem;
		border: 0;
	}
	li {
		margin-bottom: 1rem;
	}
</style>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h1>All about Rik ...</h1>

<img src="/images/rik.jpg" alt="A head photo of Rik Roots">

<p>Rik was born in the small village of <a href="http://en.wikipedia.org/wiki/Dymchurch">Dymchurch</a> on the <a href="http://en.wikipedia.org/wiki/Romney_Marsh">Romney Marshes</a> in <a href="http://en.wikipedia.org/wiki/Kent">Kent</a>, <a href="http://en.wikipedia.org/wiki/England">England</a>. Dymchurch has three <a href="http://en.wikipedia.org/wiki/Martello_tower">Martello Towers</a> and a station on the <a href="http://en.wikipedia.org/wiki/Romney,_Hythe_and_Dymchurch_Railway">Romney Hythe and Dymchurch Light Railway</a>. This was Rik’s world for the first 24 years of his life, except for those six terms away at college – the <a href="http://en.wikipedia.org/wiki/NESCOT">North East Surrey College of Technology</a>, that is: Rik somehow managed to fail his final school exams and thus never made it to university.</p>

<p>Rik is not a full-time poet or author. He has enjoyed a varied career over the years: seasonal agricultural worker; student; laboratory technician in a plastics factory; soldier (which he has memoised in the book <a href="/book/riks-army-career">Rik's Army Career</a>); civil servant - a perfect training ground for people wanting to write novels based on alternate realities and fantasy; student (again) and failed entrepreneur (repeatedly); and, most lately, web developer.</p>

<p>Poetically, Rik has been writing since he was too young to know better. He happily acknowledges that no work from that early period survives, thanks to a fortuitous kitchen fire which may or may not have been started deliberately. The kitchen was relatively unharmed, in case you were worrying.</p>

<p>Rik’s major claim to ‘proper’ poetic fame is being part of the group that established the <a href="http://magmapoetry.com/">Magma Poetry</a> magazine – he even edited Magma 6, for his sins. The magazine’s subsequent success has nothing to do with Rik; he left the Management Board a few weeks before Magma 7 was published.</p>

<p>Rik’s main publishing credentials are, strangely enough, in Magma Magazine. He hasn't sought publication validation since 2015 (and very rarely before that) – Rik has a website, after all, which makes him very happy!</p>

<p>On a broader note, Rik finally studied for that elusive degree with the Open University, gaining a 2:1 Open Honours degree in Computing and Creative Writing.</p>

<p>Rik currently lives in London, which he still rather enjoys. His hobbies include <a href="http://rikweb.co.uk/kalieda/index.php">inventing alternative worlds</a> and <a href="https://scrawl-v8.rikweb.org.uk/">developing a Javascript library</a> to help with his <a href="https://codepen.io/collection/RzzMjw?grid_type=GRID">creative coding efforts</a>.</p>

<h2>Rik Roots: published works</h2>

<p>All of Rik's publication output is through an imaginary corporation called <b><i>Rik's Sparky Little Printing Press</i></b>. These books can be downloaded for personal reading in various electronic formats from this website</p>

<p>Note that the RikVerse website is a <b><i>living document</i></b> of sorts. Poems, stories and books can be revised and republished at any time, without warning or notice. As they say: fuck posterity!</p>

<h3>Poetry chapbooks:</h3>

<ul>
	<li><a href="/book/22-facets-of-my-father">22 Facets of my Father</a> - published July 2001 (<a href="/reports/22-facets-of-my-father.md" target="_BLANK">book metadata</a>)</li>
	<li><a href="/book/play-time">Play Time</a> - published November 2001 (<a href="/reports/play-time.md" target="_BLANK">book metadata</a>)</li>
	<li><a href="/book/from-each-skull-a-story">From Each Skull, A Story</a> - published March 2006 (<a href="/reports/from-each-skull-a-story.md" target="_BLANK">book metadata</a>)</li>
	<li><a href="/book/poems-to-quote-to-your-lover">Poems to Quote to your Lover</a> - published November 2007 (<a href="/reports/poems-to-quote-to-your-lover.md" target="_BLANK">book metadata</a>)</li>
	<li><a href="/book/to-posterity">To Posterity</a> - published June 2010 (<a href="/reports/to-posterity.md" target="_BLANK">book metadata</a>)</li>
	<li><a href="/book/snowdrop-a-story-in-verse">Snowdrop: a story in verse</a> - published March 2012 (<a href="/reports/snowdrop-a-story-in-verse.md" target="_BLANK">book metadata</a>)</li>
	<li><a href="/book/paleorik">PaleoRik</a> - published September 2017 (<a href="/reports/paleorik.md" target="_BLANK">book metadata</a>)</li>
	<li><a href="/book/and-still-i-breathe">And Still I Breathe</a> - published October 2017 (<a href="/reports/and-still-i-breathe.md" target="_BLANK">book metadata</a>)</li>
	<li><a href="/book/more-love-poems-innit">More Love Poems Innit</a> - published January 2019 (<a href="/reports/more-love-poems-innit.md" target="_BLANK">book metadata</a>)</li>
</ul>

<h3>Other publications:</h3>

<ul>
	<li><a href="/book/the-gods-in-the-jungle">The Gods in the Jungle</a> - science fiction, published May 2011 (<a href="/reports/the-gods-in-the-jungle.md" target="_BLANK">book metadata</a>)</li>
	<li><a href="/book/the-story-portraits">The Story Portraits</a> - microfiction and short stories, published September 2011 (<a href="/reports/the-story-portraits.md" target="_BLANK">book metadata</a>)</li>
	<li><a href="/book/spintrap-the-lonely-city">SpinTrap: The Lonely City</a> - science fiction, published June 2013 (<a href="/reports/spintrap-the-lonely-city.md" target="_BLANK">book metadata</a>)</li>
	<li><a href="/book/riks-army-career">Rik's Army Career</a> - memoir, published December 2019 (<a href="/reports/riks-army-career.md" target="_BLANK">book metadata</a>)</li>
</ul>
