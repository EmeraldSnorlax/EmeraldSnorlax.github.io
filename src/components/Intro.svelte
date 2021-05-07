<script lang="typescript">
  import { onMount } from "svelte";
  import { linear, quadIn } from "svelte/easing";
  import { draw, scale } from "svelte/transition";
</script>

<div>
  <svg
    out:scale={{ duration: 400 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14.817 11.036"
    >
    <title>Rain</title>
    <g fill="none" stroke="#fff" stroke-width=".265">
      <path
        in:draw={{ duration: 1500, easing: quadIn }}
        stroke-linecap="round"
        d="M.132 10.903V.32S4.101-.738 4.101 2.172c0 2.646-3.969 3.44-3.969 3.44 3.969-.794 3.175.793 3.175 3.968 0 .265 0 .794.794.794 1.058 0 1.323-.794 1.323-2.116v-3.97C5.424 2.173 5.352.32 6.747.32 8.14.32 8.07 2.172 8.07 4.29v3.969c0 1.058.226 2.116 1.058 2.116 1.323 0 1.323-1.323 1.323-1.852V6.67c0-5.027 0-6.085-.265-6.085-.264 0-.264 1.058-.264 6.085v1.852c0 .53 0 1.852 1.058 1.852 1.059 0 1.059-.794 1.059-2.116V2.966c0-1.323.336-2.646 1.322-2.646.987 0 1.323 1.323 1.323 2.646V10.903"
      />
      <path
        in:draw={{ delay: 898, duration: 141, easing: linear }}
        d="M5.424 5.744c1.323 0 1.323-1.323 2.646-1.323"
      /></g
    >
    </svg
  >
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95%;
  }
  svg {
    margin: 0%;
    max-height: 40%;
    max-width: 50%;
  }
</style>
