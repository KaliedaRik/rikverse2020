<script>
    import VideoPlayer from './VideoPlayer.svelte';
    import AudioPlayer from './AudioPlayer.svelte';

    import { navigateTo } from '../utilities.js';

    import { 
        videoFile, 
        videoIsPlaying, 
        startVideo,
        stopVideo,

        audioFile, 
        audioIsPlaying,
        startAudio,
        stopAudio } from '../handleMedia.js';

    const backAction = () => navigateTo('/index');

    const videoAction = () => {

        if ($videoIsPlaying) stopVideo();
        else startVideo();
    }

    const audioAction = () => {

        if ($audioIsPlaying) stopAudio();
        else startAudio();
    }

    let videoLabels = ['&#8635; Watch', 'Stop watching'],
        audioLabels = ['&#8635; Listen', 'Stop listening'];

</script>

<style>
    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 1em 1em;
        grid-auto-flow: row;
    }
    button {
        color: rgb(47 133 90);
        border-color: rgb(66 153 225);
        background-color: rgb(190 227 248);
        padding: 0.25rem;
        margin: 0.25rem;
        text-align: center;
        cursor: pointer;
        font-size: 0.875rem;
        margin-bottom: 1rem;
        min-width: 6rem;
        transition: color 0.5s, background-color 0.5s;
        border-radius: 9999px;
    }
    button:hover {
        background-color: rgb(43 108 176);
        color: rgb(198 246 213);
    }

</style>

<div>
    <!-- back button -->
    <button on:click={backAction}>&#8592; Back</button>

    <!-- video button -->
    {#if $videoFile}
    <button on:click={videoAction}>{@html videoLabels[$videoIsPlaying]}</button>
    {/if}

    <!-- audio button -->
    {#if $audioFile}
    <button on:click={audioAction}>{@html audioLabels[$audioIsPlaying]}</button>
    {/if}
</div>

{#if $videoFile}
<VideoPlayer />
{/if}

{#if $audioFile}
<AudioPlayer />
{/if}
