import { writable } from 'svelte/store';

// Video content

const videoFile = writable('');
const videoIsPlaying = writable(0);

let videoController;

const startVideo = () => {

    stopAudio();

    if (videoController) {

        videoController.currentTime = 0;

        videoController.play()
        .then(res => videoIsPlaying.set(1))
        .catch(error => console.log(error));
    }
};

const stopVideo = () => {

    if (videoController) videoController.pause();
    videoIsPlaying.set(0);
};

const setVideoController = (el) => videoController = el;


// Audio content

const audioFile = writable('');
const audioIsPlaying = writable(0);

let audioController;

const startAudio = () => {

    stopVideo();

    if (audioController) {

        audioController.currentTime = 0;
        audioController.play();
        audioIsPlaying.set(1);
    }
};

const stopAudio = () => {

    if (audioController) audioController.pause();
    audioIsPlaying.set(0);
};

const setAudioController = (el) => audioController = el;


export {
    videoFile,
    videoController,
    setVideoController,
    videoIsPlaying,
    startVideo,
    stopVideo,

    audioFile,
    audioController,
    setAudioController,
    audioIsPlaying,
    startAudio,
    stopAudio,
}
