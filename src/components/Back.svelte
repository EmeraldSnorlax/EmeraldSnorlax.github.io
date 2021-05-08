<script lang="typescript">
  import {
    mdiChevronDoubleUp,
    mdiChevronDoubleRight,
    mdiChevronDoubleDown,
    mdiChevronDoubleLeft,
  } from "@mdi/js";
  import { location } from "../stores";
</script>

<button
  on:click={() => $location = 'home'}
>
  Back
</button>

<style>
  button {
    border: none;
    background: #424242;
    color: white;
    padding: 1em;
    border-radius: 6px;
    transition: 0.2s;
    margin: 1em 0;
    width: 100%;
  }
  button:hover {
    filter: brightness(0.8);
  }
</style>