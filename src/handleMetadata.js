import { writable } from 'svelte/store';

// JS object which will hold handles to DOM metadata elements
let metadataHandles;

// Walk through the DOM to get handles to the metadata elements in the head element
const gatherMetadataHandles = () => {

    let head = document.head;

    let handles = {

        // generic metatags
        description: head.querySelector('meta[name="description"]'),
    }

    if (handles.description) metadataHandles = handles;
};

// Exported function to update metadate element content attributes
const updateMetadata = (data) => {

    // We only want to gather the metadata element handles once per load event
    if (!metadataHandles) gatherMetadataHandles();

    if (metadataHandles) {

        // generic metatags
        metadataHandles.description.setAttribute('content', `${data.title} - ${data.description}`);
    }
};

// Used entirely by ./pages/PoemsIndex.svelte to keep track of current index filter
const poemIndexHash = writable('');

export {
    updateMetadata,
    poemIndexHash,
}
