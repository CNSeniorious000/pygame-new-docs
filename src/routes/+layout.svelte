<script lang="ts">
	import 'uno.css';
	import '@unocss/reset/tailwind-compat.css';
	import Nav from '$lib/Nav.svelte';
</script>

<Nav />

<slot />

<style>
	:global(html) {
		--uno: text-gray-800 font-sans;
	}
</style>
