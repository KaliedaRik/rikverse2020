<script>
    import { 
        videoFile,
        setVideoController,
        videoIsPlaying } from '../handleMedia.js';

    const getVideoController = () => {

        let v = document.querySelector('video'),
            timeout;

        if (v) {

            if (timeout) window.clearTimeout(timeout); 
            setVideoController(v);
        }
        else timeout = window.setTimeout(getVideoController, 400);
    };

    getVideoController();

</script>   

<style>
    video {
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin-bottom: 0;
        opacity: 0;
        height: 0;
        transition: opacity 0.6s ease-in-out, margin-bottom 0.6s ease-in-out, height 0.6s ease-in-out;
    }

    .video-active {
        margin-bottom: 1rem;
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
