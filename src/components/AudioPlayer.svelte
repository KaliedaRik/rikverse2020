<script>
    import { 
        audioFile,
        setAudioController,
        audioIsPlaying } from '../handleMedia.js';

    const getAudioController = () => {

        let a = document.querySelector('audio'),
            timeout;

        if (a) {

            if (timeout) window.clearTimeout(timeout); 
            setAudioController(a);
        }
        else timeout = window.setTimeout(getAudioController, 400);
    };

    getAudioController();

</script>   

<style>
    audio {
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin-bottom: 0;
        outline: 2px solid transparent;
        outline-offset: 2px;
        opacity: 0;
        height: 0;
        transition: opacity 0.6s ease-in-out, margin-bottom 0.6s ease-in-out, height 0.6s ease-in-out;
    }

    .audio-active {
        margin-bottom: 1rem;
        opacity: 1;
        height: 80px;
    }
</style>

{#if $audioFile}
<audio class="{$audioIsPlaying && 'audio-active'}" controls>
    <source src="{$audioFile}.mp3" type="audio/mpeg" />
    <source src="{$audioFile}.ogg" type="audio/ogg" />
    <p>Your browser doesn't support HTML5 audio</p> 
</audio>
{/if}
