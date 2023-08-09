<script lang="ts">
	import { onMount } from 'svelte';

	export let title: string;
	export let items: string[];

	let h2Hovered = false;
	let sectionHovered = false;

	let x: string;
	let w: string;
	let h2: HTMLElement;

	$: show = h2Hovered || sectionHovered;

	function caculateX() {
		x = h2.getBoundingClientRect().left + 'px';
		w = h2.getBoundingClientRect().width + 'px';
	}

	$: if (show) caculateX();
</script>

<section role="menu" tabindex="0" style:--x={x} style:--w={w} class:delay-50={show} class:show on:mouseenter={() => (sectionHovered = true)} on:mouseleave={() => (sectionHovered = false)}>
	<div />
	<ul>
		{#each items as module}
			<li><a href="/ref/{module.toLowerCase()}.html">{module}</a></li>
		{/each}
	</ul>
</section>

<h2 class:show bind:this={h2} on:mouseenter={() => (h2Hovered = true)} on:mouseleave={() => (h2Hovered = false)}>{title}</h2>

<style>
  section {
    --uno: fixed left-$x w-$w top-0
    --uno: pointer-events-none opacity-0 transition-opacity duration-300
  }

  section.show {
    --uno: pointer-events-auto opacity-100
  }

  ul {
    --uno: p-1.5 flex flex-col
    --uno: bg-gray-50 rounded-md
  }

  li {
    --uno: font-mono text-sm
  }

  a {
    --uno: py-1 px-2 block w-full
    --uno: hover:bg-gray-200 active:bg-gray-300 rounded
  }

  h2 {
    --uno: py-2 pr-3 pl-3.5
    --uno: capitalize text-sm rounded-md z-1 tracking-wider font-quicksand font-600
    --uno: hover:bg-gray-300 text-gray-900/60 hover:text-gray-900 transition-colors
  }

  h2.show {
    --uno: bg-gray-200 text-gray-900
  }

  div {
    --uno: h-14.5
  }
</style>
