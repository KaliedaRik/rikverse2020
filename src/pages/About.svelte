<script>
    import pageData from '../data/pageData.mjs';

    import { updateMetadata } from '../utilities.js';

    let pageMetadata = pageData.filter(item => item.id === 'about')[0];

    updateMetadata(pageMetadata);
</script>

<style>
	img {
		float: right;
		padding: 0 0 1rem 1rem;
		border: 0;
	}
</style>

<svelte:head>
    <title>{pageMetadata.tabTitle}</title>
</svelte:head>

<h1>All about Rik ...</h1>

<img src="/images/rik.jpg" alt="A head photo of Rik Roots">

<p>Rik was born in the small village of <a href="http://en.wikipedia.org/wiki/Dymchurch">Dymchurch</a> on the <a href="http://en.wikipedia.org/wiki/Romney_Marsh">Romney Marshes</a> in <a href="http://en.wikipedia.org/wiki/Kent">Kent</a>, <a href="http://en.wikipedia.org/wiki/England">England</a>. Dymchurch has three <a href="http://en.wikipedia.org/wiki/Martello_tower">Martello Towers</a> and a station on the <a href="http://en.wikipedia.org/wiki/Romney,_Hythe_and_Dymchurch_Railway">Romney Hythe and Dymchurch Light Railway</a>. This was Rik’s world for the first 24 years of his life, except for those six terms away at college – the <a href="http://en.wikipedia.org/wiki/NESCOT">North East Surrey College of Technology</a>, that is: Rik somehow managed to fail his final school exams and thus never made it to university.</p>

<p>Poetically, Rik has been writing since he was 14 or 15. He happily acknowledges that no work from that early period survives, thanks to a fortuitous kitchen fire which may or may not have been started deliberately. The kitchen was relatively unharmed, in case you were worrying.</p>

<p>Rik’s major claim to ‘proper’ poetic fame is being part of the group that established the <a href="http://magmapoetry.com/">Magma Poetry</a> magazine – he even edited Magma 6, for his sins. The magazine’s subsequent success has nothing to do with Rik; he left the Management Board a few weeks before Magma 7 was published.</p>

<p>Rik’s main publishing credentials are, strangely enough, in Magma Magazine. Nowadays he rarely submits poems to journals and has no plans to seek ‘proper’ venues for his chapbooks and manuscripts – Rik has a website, after all, which makes him very happy!</p>

<p>On a broader note, Rik has recently finished studying for that elusive degree with the Open University, gaining a 2:1 Open Honours degree (computing and English), and writing science fiction novels – one completed and self-published, and a second inching its way towards those elusive words <i>The End</i>. Rik used to work for Her Majesty’s Civil Service which is, he says, a perfect training ground for people wanting to write novels based on alternate realities and fantasy.</p>

<p>Rik currently lives in London, which he still rather enjoys. His hobbies include <a href="http://rikweb.co.uk/kalieda/index.php">inventing alternative worlds</a> and wasting time on social media. He works as a freelance web developer.</p>
