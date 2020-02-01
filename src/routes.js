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
    path: '/',
    component: Home
  }, {
    path: '/about',
    component: About
  }, {
    path: '/blog',
    component: Blog
  }, {
    path: '/publications',
    component: Publications
  }, {
    path: '/index',
    component: PoemsIndex
  }, {
    path: '/cookies',
    component: CookieConsents
  }, {
    path: '/privacy-and-security',
    component: Privacy
  }, {
    path: '*',
    component: ErrorPage
  }
];

export {
  router,
  startRouter,
  routes,
};
