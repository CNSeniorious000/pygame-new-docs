<script>
	import { mostUsefulStuff, advancedStuff, otherStuff } from './constraints/modules';
	import List from './List.svelte';
</script>

<header>
	<nav>
		<section class="flex flex-row gap-2 items-center">
			<a href="/">
				<h1>pygame</h1>
			</a>
			<div class="hidden sm:contents text-4">
				<List title="most useful stuff" items={mostUsefulStuff} />
				<List title="advanced stuff" items={advancedStuff} />
				<List title="other stuff" items={otherStuff} />
			</div>
		</section>
		<section />
	</nav>
</header>

<style>
	header {
		--uno: left-0 right-0 fixed bottom-0 sm:( sticky top-0 )
		--uno: flex flex-row justify-center
		--uno: bg-gray-100
		--uno: select-none z-1
	}

	nav {
		--uno: w-full lg:w-4xl
		--uno: flex flex-row justify-between items-center
	}

	a {
		--uno: py-2 px-2.5 sm:( py-3 px-3.5 )
		--uno: bg-gray-200/40 hover:bg-gray-200 transition-background-color
	}

	h1 {
		--uno: text-lg font-600 tracking-2 ml-2 font-quicksand
		--uno: uppercase
	}
</style>
