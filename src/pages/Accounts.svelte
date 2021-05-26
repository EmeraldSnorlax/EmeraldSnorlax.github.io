<script lang="typescript">
  import { fly } from "svelte/transition";
  import Back from "../components/Back.svelte";
  import {
    mdiDiscord,
    mdiGithub,
    mdiGitlab,
    mdiMatrix,
    mdiSteam,
    mdiCheck,
  } from "@mdi/js";
  import copy from "./copy";
  let discordIcon = mdiDiscord;
  const discord = "Rain (Snorlax)#8265";
</script>

<main
  in:fly={{ y: -600, duration: 400, delay: 200 }}
  out:fly={{ y: -600, duration: 400 }}
>
  <div class="container">
    <h2>Accounts</h2>
    <div class="accounts">
      <button
        class="discord"
        on:click={() => {
          copy(discord, () => (discordIcon = mdiCheck));
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32px"
          height="32px"
          ><path d={discordIcon} />
        </svg>
        Copy Discord
      </button>
      <button
        class="github"
        on:click={() => window.open("https://github.com/EmeraldSnorlax")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32px"
          height="32px"
          ><path d={mdiGithub} />
        </svg>
        Github
      </button>
      <button
      on:click={() => window.open("https://gitlab.com/EmeraldSnorlax")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          ><path d={mdiGitlab} />
        </svg>
        GitLab
      </button>
      <button
      on:click={() => window.open("https://matrix.to/#/@emeraldsnorlax:matrix.org")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          ><path d={mdiMatrix} />
        </svg>
        Matrix
      </button>
      <button
      on:click={() => window.open("https://steamcommunity.com/id/EmeraldSnorlax/")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          ><path d={mdiSteam} />
        </svg>
        Steam
      </button>
    </div>
    <Back />
  </div>
</main>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: white;
    overflow-y: auto;
  }

  .container {
    width: 65%;
  }

  .accounts > button {
    background: #454545;
    padding: 0.7em;
    display: flex;
    border-radius: 5px;
    width: 100%;
    align-items: center;
    color: white;
    fill: white;
    font-size: large;
    border: none;
    margin-bottom: 0.7em;
    transition: 0.2s;
  }

  .accounts > button:hover {
    filter: brightness(0.8);
  }

  .accounts > button > svg {
    margin-right: 8px;
  }

  .github {
    background: #445757 !important;
    margin-bottom: 2em !important;
    margin-top: 1em;
  }
  .discord,
  .github {
    background: #556868 !important;
    padding: 1em 0.7em !important;
    font-size: x-large !important;
    font-weight: 600;
  }
</style>
