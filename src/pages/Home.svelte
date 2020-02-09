<script>
	import PoemCard from '../components/PoemCard.svelte'

	import { getRandomPoem } from '../utilities.js'
</script>

<style></style>

<PoemCard poemData={getRandomPoem()} />
