import router from "page";

const startRouter = router.start;

import Home from "./pages/Home.svelte";
import About from "./pages/About.svelte";

import Blog from "./pages/Blog.svelte";
import BlogPost from "./pages/BlogPost.svelte";

import PoemsIndex from "./pages/PoemsIndex.svelte";
import Poem from "./pages/Poem.svelte";

import Publications from "./pages/Publications.svelte";
import Book from "./pages/Book.svelte";
import ReadBook from "./pages/ReadBook.svelte";

import Support from "./pages/Support.svelte";
import Privacy from "./pages/Privacy.svelte";
import ErrorPage from "./pages/ErrorPage.svelte";

const routes = [

    {
        // The Author page - because "Every ass loves to hear himself bray"
        path: '/about',
        component: About

    }, {
        // Blog post page
        path: '/blog/:slug',
        component: BlogPost
    }, {
        // Index of links to individual blog posts
        path: '/blog',
        component: Blog

    }, {
        // Index of links to each of Rik's books
        path: '/publications',
        component: Publications
    }, {
        // Book details and download page
        path: '/book/:slug',
        component: Book
    }, {
        // Redirect to the publications page on this dead end
        path: '/book',
        component: Publications
    }, {
        // "Read the book" page
        path: '/read/:slug',
        component: ReadBook
    }, {
        // Redirect to the publications page on this dead end
        path: '/read',
        component: Publications

    }, {
        // Index of links to individual poems
        path: '/index',
        component: PoemsIndex
    }, {
        // Display a poem
        path: '/poem/:slug',
        component: Poem
    }, {
        // Redirect to the index of links to individual poems
        path: '/poem',
        component: PoemsIndex

    }, {
        // A dedicated support page
        path: '/support',
        component: Support
    }, {
        // A dedicated privacy/security page, because every website needs one
        path: '/privacy-and-security',
        component: Privacy

    }, {
        // The landing page, which will show a random poem to the user
        path: '/',
        component: Home
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
