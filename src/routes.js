import router from "page";

const startRouter = router.start;

import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";
import Blog from "./pages/Blog.svelte";
import PoemsIndex from "./pages/PoemsIndex.svelte";
import Publications from "./pages/Publications.svelte";
import CookieConsents from "./pages/CookieConsents.svelte";
import Privacy from "./pages/Privacy.svelte";
import ErrorPage from "./pages/ErrorPage.svelte";

const routes = [
    {
        // The landing page, which will show a random poem to the user
        path: '/',
        component: Home
    }, {
        // The Author page - because "Every ass loves to hear himself bray"
        path: '/about',
        component: About
    }, {
        // Index of links to individual blog posts
        path: '/blog',
        component: Blog
    }, {
        // Index of links to each of Rik's books
        path: '/publications',
        component: Publications
    }, {
        // Index of links to individual poems
        path: '/index',
        component: PoemsIndex
    }, {
        // A dedicated cookie conbsents page, where users can make appropriate choices
        path: '/cookies',
        component: CookieConsents
    }, {
        // A dedicated privacy/security page, because every website needs one
        path: '/privacy-and-security',
        component: Privacy
    }, {
        // The catch-all route, to serve an error page
        path: '*',
        component: ErrorPage
    }
];

export {
  router,
  startRouter,
  routes,
};
