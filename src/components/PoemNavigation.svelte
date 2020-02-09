<script>
    import VideoPlayer from './VideoPlayer.svelte';
    import AudioPlayer from './AudioPlayer.svelte';

    import { navigateTo } from '../utilities.js';

    import { 
        videoFile, 
        videoIsPlaying, 
        startVideo,
        stopVideo,
        setVideoController,

        audioFile, 
        audioIsPlaying,
        startAudio,
        stopAudio,
        setAudioController } from '../handleMedia.js';

    const backAction = () => {

        // prevent a pile up of media by getting rid of the media element handle reference
        setVideoController();
        setAudioController();

        navigateTo('/index');
    }

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
        @apply block rounded-full bg-blue-200 text-green-700 border-blue-500 p-1 m-1 text-center cursor-pointer text-sm mb-4 outline-none;
        min-width: 6rem;
        transition: color 0.5s, background-color 0.5s;
    }
    button:hover {
        @apply bg-blue-700 text-green-200;
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
