<script>
    import { 
        videoFile,
        setVideoController,
        videoIsPlaying,
        videoController } from '../handleMedia.js';

    const getVideoController = () => {

        let v = document.querySelector('video'),
            timeout;

        if (v) {

            if (timeout) window.clearTimeout(timeout); 
            setVideoController(v);
        }
        else timeout = window.setTimeout(getVideoController, 400);
    };

    if (!videoController) getVideoController();

</script>   

<style>
    video {
        @apply mx-auto block mb-0 outline-none;
        opacity: 0;
        height: 0;
        transition: opacity 0.6s ease-in-out, margin-bottom 0.6s ease-in-out, height 0.6s ease-in-out;
    }

    .video-active {
        @apply mb-4;
        opacity: 1;
        height: 240px;
    }
</style>

{#if $videoFile}
<video class="{$videoIsPlaying && 'video-active'}" controls>
    <source src="{$videoFile}" type="video/mp4" />
    <p>Your browser doesn't support HTML5 video</p> 
</video>
{/if}
