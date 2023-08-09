<script lang="ts">
	import hljs from 'highlight.js';
	import 'highlight.js/styles/base16/one-light.css';
	import './prose.css';
	import { onMount, tick } from 'svelte';

	export let raw: string;

	let title: string;
	let main: HTMLElement;
	let tmp: HTMLTemplateElement;
	let docBody: string;

	let mounted = false;

	onMount(() => (mounted = true));

	$: console.log({ mounted });

	$: if (mounted && raw) parse();

	async function highlightAll() {
		await tick();
		main.querySelectorAll('pre').forEach((pre) => (pre.innerHTML = hljs.highlightAuto(pre.innerText, ['python', 'plain']).value));
	}

	async function parse() {
		title = tmp.content.querySelector('title')!.innerText.split(' — ')[0];
		tmp.content.querySelectorAll('script, head, style, img').forEach((node) => node.parentNode!.removeChild(node));
		tmp.content.querySelectorAll('pre').forEach((pre) => (pre.innerHTML = pre.innerText));
		docBody = tmp.content.querySelector('div[role="main"]')!.innerHTML;
		highlightAll();
	}
</script>

<svelte:head>
	<title>{title ?? 'pygame new docs'}</title>
</svelte:head>

<template bind:this={tmp}>
	{@html raw}
</template>

{#if docBody}
	<main bind:this={main} class="prose max-w-full lg:max-w-4xl">
		{@html docBody}
	</main>
{:else}
	<div class="grid place-items-center min-h-2xl">loading...</div>
{/if}
