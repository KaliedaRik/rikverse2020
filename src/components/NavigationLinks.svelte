<script></script>

<style>
    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 0 0;
        justify-items: center;
    }
    a {
        @apply inline-block text-center m-0 text-gray-200 no-underline;
        transition: color 0.5s;
    }
    a:hover {
        @apply underline;
        color: #fffc00;
    }
</style>

<div>
    <a href="/index">Poems</a>
    <a href="/publications">Books</a>
    <a href="/blog">Blog</a>
    <a href="/about">About Rik</a>
    <a href="/cookies">Cookies</a>
</div>
