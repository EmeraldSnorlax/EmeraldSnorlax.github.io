<script lang="typescript">
  import { fade } from "svelte/transition";
  import { cubicIn, linear } from "svelte/easing";
  import {
    mdiChevronDoubleUp,
    mdiChevronDoubleRight,
    mdiChevronDoubleDown,
    mdiChevronDoubleLeft,
  } from "@mdi/js";
  import { location } from "./stores";
</script>

<nav
  in:fade={{ duration: 800, easing: cubicIn }}
  out:fade={{ duration: 100, easing: linear }}
>
  <div>
    <h1>Hello!</h1>
    <h2>I'm Rain.</h2>
    {#if $location !== "home" && $location}
      <p in:fade={{ duration: 0, delay: 300 }}>
        "{$location}" doesn't exist, so I've brought you back home.
      </p>
    {/if}
  </div>
  <div class="up nav">
    <button on:click={() => (window.location.hash = "#projects")}
      >Projects
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"><path d={mdiChevronDoubleUp} /></svg
      >
    </button>
  </div>
  <div class="right nav">
    <button on:click={() => (window.location.hash = "#pgp")}
      >PGP
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"><path d={mdiChevronDoubleRight} /></svg
      >
    </button>
  </div>
  <div class="down nav">
    <button on:click={() => (window.location.hash = "#accounts")}
      >Accounts
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"><path d={mdiChevronDoubleDown} /></svg
      >
    </button>
  </div>
  <div class="left nav">
    <button on:click={() => (window.location.hash = "#about")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24px"
        height="24px"><path d={mdiChevronDoubleLeft} /></svg
      >About
    </button>
  </div>
</nav>

<style>
  nav {
    color: white;
    padding: 1em;
    border-radius: 1em;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    position: relative;
  }
  h1 {
    font-size: 400%;
  }
  h2 {
    font-size: 200%;
  }

  @media (min-width: 966px) {
    div.nav {
      position: absolute;
      transition: 0.2s;
    }
    div.nav:hover {
      opacity: 0.4;
    }
    div.up {
      top: 25%;
    }
    div.down {
      bottom: 25%;
    }
    div.left {
      left: 25%;
    }
    div.right {
      right: 25%;
    }
    nav {
      display: flex;
    }
  }

  @media (max-width: 966px) {
    svg {
      display: none;
    }

    button:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0%;
      border-bottom: 2px solid #26c6da;
      transition: 0.2s;
    }

    button:hover:after {
      width: 100%;
    }
  }

  svg {
    fill: white;
  }

  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 1em;
    font-size: large;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
</style>
