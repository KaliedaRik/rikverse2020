// localStorage and sessionStorage functionality
const isMultiSessionStorageSet = () => {

    if (localStore.getItem('rememberChoicesBetweenSessions') === 'yes') return true;
    return false;
}

let localStore = window.localStorage,
    sessionStore = window.sessionStorage,
    multiSessionEnabled = isMultiSessionStorageSet(),
    store = (multiSessionEnabled) ? localStore : sessionStore;

const setToStore = (key, choice) => store.setItem(key, choice);
const getFromStore = (key) => store.getItem(key) || '';

// transfer data between session and local stores
const useLocalStore = (flag) => {

    let storedItems = [];

    let populateItemsArray = (s) => {

        let l = s.length;

        for (let i = 0; i < l; i++) {

            storedItems.push(s.key(i));
        }
    }

    if (flag) {

        // moving data from sessionStore to localStore
        populateItemsArray(sessionStore);

        storedItems.forEach(key => localStore.setItem(key, sessionStore.getItem(key)));
        sessionStore.clear();
        store = localStore;
        multisession.setTo('yes');
        multiSessionEnabled = true;
    }
    else {

        // moving data from localStore to sessionStore
        populateItemsArray(localStore);

        storedItems.forEach(key => sessionStore.setItem(key, localStore.getItem(key)));
        localStore.clear();
        store = sessionStore;
        multisession.setTo('no');
        multiSessionEnabled = false;
    }
};

// Svelte store functionality
import { writable } from 'svelte/store';

function createCookieJar (id) {

    const cookieType = id;

    const { subscribe, set } = writable(getFromStore(cookieType));

    return {
        subscribe,
        set,
        setTo: (val) => {

            set(val);
            setToStore(cookieType, val);
        }
    };
}

let paypalCookies = createCookieJar('paypal');
let facebookCookies = createCookieJar('facebook');
let twitterCookies = createCookieJar('twitter');

const allCookiesMultiYes = () => {

    paypalCookies.setTo('yes');
    facebookCookies.setTo('yes');
    twitterCookies.setTo('yes');
    useLocalStore(true);
};
const allCookiesSingleYes = () => {

    paypalCookies.setTo('yes');
    facebookCookies.setTo('yes');
    twitterCookies.setTo('yes');
    useLocalStore(false);
};
const allCookiesSingleNo = () => {

    paypalCookies.setTo('no');
    facebookCookies.setTo('no');
    twitterCookies.setTo('no');
    useLocalStore(false);
};

let multisession = createCookieJar('rememberChoicesBetweenSessions');

if (multiSessionEnabled) useLocalStore(true);
else useLocalStore(false);

const enableMultiSession = () => useLocalStore(true);
const disableMultiSession = () => useLocalStore(false);

export {
    paypalCookies,
    facebookCookies,
    twitterCookies,

    multisession,

    allCookiesMultiYes,
    allCookiesSingleYes,
    allCookiesSingleNo,

    enableMultiSession,
    disableMultiSession
}

