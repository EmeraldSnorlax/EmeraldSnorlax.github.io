<script lang="typescript">
  import { fly, draw } from "svelte/transition";
  import { quintInOut } from "svelte/easing";
  import { mdiEmail } from "@mdi/js";
  import Back from "../components/Back.svelte";
  const enbyIn = { duration: 800, easing: quintInOut, delay: 100 };
  const transIn = { duration: 800, easing: quintInOut, delay: 500 };
  const flagsOut = { duration: 200, easing: quintInOut };
  let email = "";
  let uncomputedEmail = [
    ["EmeraldSnorlax".toLowerCase(), "disroot"].join("@"),
    "org",
  ].join(".");
</script>

<main in:fly={{ x: 600, duration: 400 }} out:fly={{ x: 600, duration: 600 }}>
  <div>
    <h2>About</h2>
    <h3>Hi!</h3>
    <p>You might know me as EmeraldSnorlax.</p>
    <p>they/them</p>
    <p>
      I write bad software, mostly websites. My favourite language is
      TypeScript, and my favourite web framework is Svelte.
    </p>
    {#if !email}
      <button class="email" on:click={() => (email = uncomputedEmail)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"><path d={mdiEmail} /></svg
        >
        Click to reveal email
      </button>
    {:else}
      <span in:fly={{ delay: 100, duration: 400 }}>
        <a href="mailto:{email}">{email}</a>
        <p>Don't forget to encrypt your mail against my PGP key!</p>
      </span>
    {/if}
    <Back />
  </div>
</main>

<!-- Flags -->
<svg
  class="enby"
  out:fly={flagsOut}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 106.098 0.5"
  ><g fill="none" stroke-width="10"
    ><path in:draw={enbyIn} stroke="#fff433" d="M.132.132h26.459" /><path
      in:draw={enbyIn}
      stroke="#9b59d0"
      stroke-linejoin="round"
      d="M53.049.132h26.458"
    /><path in:draw={enbyIn} stroke="#000" d="M79.507.132h26.459" /><path
      in:draw={enbyIn}
      stroke="#fff"
      stroke-linejoin="round"
      d="M26.59.132H53.05"
    /></g
  ></svg
>

<svg
  class="trans"
  out:fly={flagsOut}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 132.292 0.5"
  ><g fill="none" stroke-width="10"
    ><path in:draw={transIn} stroke="#5bcffa" d="M.132.132h26.459" /><path
      in:draw={transIn}
      stroke="#fff"
      stroke-linejoin="round"
      d="M53.049.132h26.458"
    /><path in:draw={transIn} stroke="#f5abb9" d="M79.507.132h26.459" /><path
      in:draw={transIn}
      stroke="#f5abb9"
      stroke-linejoin="round"
      d="M26.59.132H53.05"
    /><path in:draw={transIn} stroke="#5bcffa" d="M105.966.132h26.458" /></g
  ></svg
>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: white;
  }

  div {
    width: 65%;
  }

  svg.trans,
  svg.enby {
    position: absolute;
    left: 0;
  }

  svg.enby {
    top: 0;
  }

  svg.trans {
    bottom: 0;
  }

  a {
    text-decoration: none;
    color: #23e5ff;
    position: relative;
  }

  a:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    border-bottom: 2px solid #23e5ff;
    transition: 0.4s;
  }

  a:hover:after {
    width: 100%;
  }

  button {
    padding: 1em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    background: white;
    border: none;
    transition: 0.2s;
    color: black;
    border-radius: 5px;
  }

  button > svg {
    margin-right: 1em;;
  }

  button:hover {
    filter: brightness(1.2);
  }
</style>
