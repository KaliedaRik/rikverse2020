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

export {
    prettifyDate,
    prettifyMonthDate,
    updateMetadata,
    scrollToTopOnLoad,
}
