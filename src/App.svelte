<script lang="typescript">
	import { onMount } from "svelte";
	import { intro } from "./stores";
	import Intro from "./components/Intro.svelte";

	onMount(() => {
		setTimeout(() => ($intro = true), 2000);
	});
</script>

<div>
	{#if !$intro}
		<Intro />
	{:else}
	foobar
	{/if}
</div>

<style>
	div {
		background-color: #212121;
		height: 100vh;
	}
</style>
