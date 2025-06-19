<script>
    import { getContext, onDestroy } from 'svelte';

    import PoemNavigation from './PoemNavigation.svelte';
    import PoemLicence from './PoemLicence.svelte';
    import PoemImage from './PoemImage.svelte';

    import { prettifyMonthDate } from '../utilities.js';

    import { 
        videoFile, 
        audioFile, 
        videoIsPlaying, 
        audioIsPlaying } from '../handleMedia.js';

    export let poemData;
    let copy = '';

    videoFile.set(poemData.videofile);
    audioFile.set(poemData.audiofile);
    videoIsPlaying.set(0);
    audioIsPlaying.set(0);

    // Handling canvas-based poems
    const scrawl = getContext('scrawl');

    const poemGraphicFunctions = {};
    const poemGraphicScript = 'graphic-poem-script';

    const killOldScript = () => {

        const oldScript = document.querySelector(`#${poemGraphicScript}`);
        if (oldScript) oldScript.remove();

        poemGraphicFunctions.buildPoemGraphic = () => {
            console.log('this is the do-nothing function for buildPoemGraphic');
        };

        poemGraphicFunctions.killPoemGraphic = () => {
            console.log('this is the do-nothing function for killPoemGraphic');
        };
    }

    // Initialize poemGraphicFunctions to defaults
    killOldScript();

    // Fetch the poem's HTML
    fetch(`/poemCopy/${poemData.id}.html`)
    .then(res => res.text())
    .then(res => {

        copy = res;

        // Handle additional upload of canvas-based poem code
        if (poemData.graphicPoem) {

            killOldScript();

            const script = document.createElement('script');
            script.id = poemGraphicScript;

            script.onload = () => {

                initPoemGraphic(poemGraphicFunctions);
                poemGraphicFunctions.buildPoemGraphic(scrawl);
            }

            script.src = `/poemCopy/${poemData.id}.js`;
            document.body.append(script);
        }
    })
    .catch(error => console.log(error));

    // Clean up canvas-based poems
    onDestroy(() => {

        if (poemData.graphicPoem) {

            poemGraphicFunctions.killPoemGraphic(scrawl);
            killOldScript();
        }
    });

</script>

<style>
    time {
        display: block;
        font-size: 0.75rem;
        color: rgb(74 85 104);
        font-style: italic;
        margin-bottom: 1rem;
    }
</style>

{#if copy}
    <!-- poem title -->
    <h1>{poemData.title}</h1>

    <!-- top image, if required -->
    {#if poemData.imagePosition === 'top'}
        <PoemImage position="top" file={poemData.imagefile} caption={poemData.imageCaption} />
    {/if}

    <!-- the poem copy goes here -->
    {@html copy}

    <!-- publication / last updated date -->
    <time datetime="{poemData.publishdate}">
        Published: {prettifyMonthDate(poemData.publishdate)}
    </time>

    <!-- poem navigation - includes video/audio display buttons -->
    <PoemNavigation />

    <!-- bottom image, if required -->
    {#if poemData.imagePosition === 'bottom'}
        <PoemImage position="bottom" file={poemData.imagefile} caption={poemData.imageCaption} />
    {/if}

    <!-- copyright notice -->
    <PoemLicence publishdate={poemData.publishdate} complete={poemData.complete} />

{:else}
    <h3>Retrieving poem</h3>
{/if}
