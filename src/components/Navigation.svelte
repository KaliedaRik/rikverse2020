<script></script>

<style>
	nav {
		@apply pt-2 pb-2;
		background: rgb(2,0,36);
		background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 5%, rgba(173,184,236,1) 38%, rgba(185,234,244,1) 100%);
	}
	.banner {
		width: 100%;
	}
	.banner img {
		margin: 0 auto 1rem auto;
		width: 40%;
	}
	.nav-grid {
	    display: grid;
	    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	    grid-gap: 0 0;
	    justify-items: center;
	}
	a {
		@apply inline-block text-center m-0 text-gray-200 no-underline;
		font-family: "Roboto Slab", Georgia, Cambria, "Times New Roman", Times, serif;
    	transition: color 0.5s;
	}
	.banner a {
		@apply w-full;
	}
	a:hover {
		@apply underline;
		color: #fffc00;
	}

	@media (min-width: 768px) {

		nav {
			@apply rounded-lg;
		}
	}
</style>

<nav>
	<div class="banner" title="Click here to see a random poem">
		<a href="/">
			<img src="/images/rikverse-logo.png" alt="RikVerse banner logo" />
		</a>
	</div>
	<div class="nav-grid">
		<a href="/index">Poems</a>
		<a href="/publications">Books</a>
		<a href="/blog">Blog</a>
		<a href="/about">About Rik</a>
		<a href="/cookies">Cookies</a>
	</div>
</nav>
