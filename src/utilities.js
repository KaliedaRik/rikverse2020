// Human-readable dates functionality
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const prettifyDate = (inputString) => {

    if (inputString && inputString.substring) {

        let [y, m, d] = [...inputString.split('-')];

        if (m) {

            m--;

            let myDate = new Date(y, m, d);

            return `${days[myDate.getDay()]} ${myDate.getDate()} ${months[myDate.getMonth()]},  ${myDate.getFullYear()}`;
        }
        else return inputString;
    }
    else return '';
};

const prettifyMonthDate = (inputString) => {

    if (inputString && inputString.substring) {

        let [y, m, d] = [...inputString.split('-')];

        if (m) {

            m--;

            let myDate = new Date(y, m, d);

            return `${months[myDate.getMonth()]} ${myDate.getFullYear()}`;
        }
        else return inputString;
    }
    else return '';
};

// Creative Commons licence checker
// - all completed poems published > 15 years are "cc-by" licence
// - all other completed poems are "cc-by_nc_nd" licence
// - poems not marked as completed excluded from CC licences
const checkCopyright = (updated, complete) => {

    if (updated && complete) {

        let [y, m, d] = [...updated.split('-')];

        let myDate = new Date(y, m, d);

        let now = new Date(),
            cy = now.getFullYear() - 15,
            cm = now.getMonth(),
            cd = now.getDate();

        let testDate = new Date(cy, cm, cd);

        if (testDate > myDate) return '/images/cc-by.webp';
        else return '/images/cc-by_nc_nd.webp';
    }

    return '';
};


// Random poem picker
import poemData from './data/poemData.mjs';
let showcasePoems = poemData.filter(item => item.showcase),
    showcaseLength = showcasePoems.length;

const getRandomPoem = () => showcasePoems[Math.floor(Math.random() * showcaseLength)];


// Page load manipulation functionality
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

// Use navigateTo() in preference to navigateBack()
// - will remove this function from build in due course
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

    getRandomPoem,

    scrollToTopOnLoad,

    navigateTo,
    navigateBack,
}
