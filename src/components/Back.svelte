<script lang="typescript">
  import { mdiHome } from "@mdi/js";
  import { location } from "../stores";
</script>

<button
  on:click={() => {
    window.location.hash = "home";
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24px"
    height="24px"><path d={mdiHome} /></svg
  >
  Back
</button>

<style>
  button {
    border: none;
    background: #795548;
    color: white;
    fill: white;
    padding: 1em;
    border-radius: 6px;
    transition: 0.2s;
    margin: 1em 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  button:hover {
    filter: brightness(0.8);
  }

  svg {
    padding-right: 0.5em;
  }
</style>
