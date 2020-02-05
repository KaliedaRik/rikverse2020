// HUMAN-READABLE DATES FUNCTIONALITY
// String arrays for use with human-readable date functions
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Exported functions for making human-readable dates
const prettifyDate = (inputString) => {

    let [y, m, d] = [...inputString.split('-')];

    if (m) {

        m--;

        let myDate = new Date(y, m, d);

        return `${days[myDate.getDay()]} ${myDate.getDate()} ${months[myDate.getMonth()]},  ${myDate.getFullYear()}`;
    }
    else return inputString;
};

const prettifyMonthDate = (inputString) => {

    let [y, m, d] = [...inputString.split('-')];

    if (m) {

        m--;

        let myDate = new Date(y, m, d);

        return `${months[myDate.getMonth()]} ${myDate.getFullYear()}`;
    }
    else return inputString;
};

const checkCopyright = (updated, complete) => {

    if (updated && complete) {

        let [y, m, d] = [...updated.split('-')];

        let myDate = new Date(y, m, d);

        let now = new Date(),
            cy = now.getFullYear() - 15,
            cm = now.getMonth(),
            cd = now.getDate();

        let testDate = new Date(cy, cm, cd);

        if (testDate > myDate) return '/images/cc-by.png';
        else return '/images/cc-by_nc_nd.png';
    }

    return '';
};


// METADATA FUNCTIONALITY
// JS object which will hold handles to DOM metadata elements
let metadataHandles;

// Walk through the DOM to get handles to the metadata elements in the head element
const gatherMetadataHandles = () => {

    let head = document.head;

    let handles = {

        // generic metatags
        description: head.querySelector('meta[name="description"]'),

        // Facebook metatags

        // Twitter metatags
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

        // Facebook metatags

        // Twitter metatags
    }
};


// PAGE LOAD MANIPULATION FUNCTIONALITY
// Exported function to make poem or blog post scroll to top of page when it first loads
const scrollToTopOnLoad = () => {

    if (window.scrollY > 0) {

        window.scrollTo({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
        });
    }
};

// Page.js only watches for anchor link clicks. 
// - we need to create and trigger a click event on an anchor element
//   to make sure the required navigation happens
const navigateTo = (destination) => {

    // sanitize the passed-in value
    destination = destination || '/';

    if (destination.indexOf('/') !== 0) destination = `/${destination}`;

    let a = document.createElement('a');
    a.href = destination;

    document.body.appendChild(a);
    a.click();
    a.remove();
};

const navigateBack = () => {

    let h = window.history;

    // if the user has opened RikVerse in a new browser or browser tab
    // and the required item was incorrect (or the cookies page)
    // - redirect to the RikVerse home page
    if (h.length < 2) navigateTo('/');

    // otherwise, send the user back to their previous page
    else h.back();
};

export {
    prettifyDate,
    prettifyMonthDate,
    checkCopyright,

    updateMetadata,

    scrollToTopOnLoad,

    navigateTo,
    navigateBack,
}
