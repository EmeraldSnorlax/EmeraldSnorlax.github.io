<script lang="typescript">
  import { onMount } from "svelte";
  import { fly, fade } from "svelte/transition";
  import Back from "../components/Back.svelte";
  import getProjects from "./projects";
  import type Repository from "./repository";
  import { mdiSourceFork, mdiStarOutline } from "@mdi/js";

  let projects: Repository[] = [];
  onMount(async () => {
    projects = (await getProjects("EmeraldSnorlax")) as Repository[];
  });
</script>

<main in:fly={{ y: 600, duration: 400 }} out:fly={{ y: 600, duration: 400 }}>
  <div class="project-container">
    <h2>Projects</h2>
    <Back />
    <div class="projects">
      {#each projects as project, i}
        <div
          in:fade
          on:keypress={(e) => {
            if (e.key === 'Enter') window.open(`${project.html_url}`);
          }}
          on:click={() => window.open(`${project.html_url}`)}
          role="button"
          tabindex={i + 1}
          class="project"
        >
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div class="info">
            <div class="stats">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                  ><path d={mdiStarOutline} />
                  <title>Stars</title>
                </svg>
                <p>{project.stargazers_count}</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16px"
                  height="16px"
                  ><path d={mdiSourceFork} />
                  <title>Forks</title>
                </svg>
                <p>{project.forks}</p>
              </div>
            </div>
            <p class="language {project.language}">{project.language}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  div.projects {
    height: 65vh;
    overflow-y: auto;
    cursor: pointer;
  }

  div.project {
    background-color: #424242;
    padding: 5px 1em;
    transition: 0.2s;
    border-bottom: #fff 1px dashed;
  }

  .info,
  .stats {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .stats > div {
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 1em;
  }

  .stats > div > p {
    font-family: sans-serif !important;
    margin-left: 4px;
  }

  div.project:hover,
  div.project:focus {
    filter: brightness(1.2);
  }

  .language {
    text-align: right;
  }

  .TypeScript {
    color: #2d79c7;
  }

  .Svelte {
    color: #ff3e00;
  }

  .Shell {
    color: #89e051;
  }

  h2 {
    font-size: xxx-large;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    color: white;
  }

  svg {
    fill: white;
  }
</style>
