//Svelte writable stores to handle metadata (specifically for twitter share buttons)
import { writable } from 'svelte/store';

const metaTitle = writable('');
const metaDescription = writable('');

const poemIndexHash = writable('');

// JS object which will hold handles to DOM metadata elements
let metadataHandles;

// Walk through the DOM to get handles to the metadata elements in the head element
const gatherMetadataHandles = () => {

    let head = document.head;

    let handles = {

        // generic metatags
        description: head.querySelector('meta[name="description"]'),

        // Facebook metatags
        ogUrl: head.querySelector('meta[property="og:url"]'),
        ogTitle: head.querySelector('meta[property="og:title"]'),
        ogDescription: head.querySelector('meta[property="og:description"]'),
        ogImage: head.querySelector('meta[property="og:image"]'),

        // Twitter metatags
        twitterTitle: head.querySelector('meta[name="twitter:title"]'),
        twitterDescription: head.querySelector('meta[name="twitter:description"]'),
        twitterImage: head.querySelector('meta[name="twitter:image"]'),
        twitterImageAlt: head.querySelector('meta[name="twitter:image:alt"]'),
    }

    if (handles.description && handles.ogUrl && handles.twitterTitle) metadataHandles = handles;
};

// Exported function to update metadate element content attributes
const updateMetadata = (data) => {

    // We only want to gather the metadata element handles once per load event
    if (!metadataHandles) gatherMetadataHandles();

    if (metadataHandles) {

        let domain = window.location.origin,
            url = window.location.href;

        metaTitle.set(data.title);
        metaDescription.set(data.description);

        // generic metatags
        metadataHandles.description.setAttribute('content', `${data.title} - ${data.description}`);

        // Facebook metatags
        metadataHandles.ogUrl.setAttribute('content', `${url}`);
        metadataHandles.ogTitle.setAttribute('content', data.title);
        metadataHandles.ogDescription.setAttribute('content', data.description);
        metadataHandles.ogImage.setAttribute('content', `${domain}${data.imageUrl}`);

        // Twitter metatags
        metadataHandles.twitterTitle.setAttribute('content', data.title);
        metadataHandles.twitterDescription.setAttribute('content', data.description);
        metadataHandles.twitterImage.setAttribute('content', `${domain}${data.imageUrl}`);
        metadataHandles.twitterImageAlt.setAttribute('content', data.imageText);
    }
};

export {
    updateMetadata,

    metaTitle,
    metaDescription,

    poemIndexHash,
}
