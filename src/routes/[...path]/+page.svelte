<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import Main from '$lib/Main.svelte';

	export let data: PageData;

	let { url, dom } = data;

	$: {
		url = $page.data.url;
		dom = $page.data.dom;
	}
</script>

<div class="flex flex-row m-5 sm:m-8 justify-around">
	{#key dom}
		<Main raw={dom} />
	{/key}
</div>
