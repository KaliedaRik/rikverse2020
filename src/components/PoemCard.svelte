<script>
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

    videoFile.set(poemData.videofile);
    audioFile.set(poemData.audiofile);
    videoIsPlaying.set(0);
    audioIsPlaying.set(0);

    let copy = '';

    fetch(`/poemCopy/${poemData.id}.html`)
    .then(res => res.text())
    .then(res => copy = res)
    .catch(error => console.log(error));
</script>

<style>
    time {
        @apply block text-xs text-gray-700 italic mb-4;
    }
</style>

{#if copy}
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
