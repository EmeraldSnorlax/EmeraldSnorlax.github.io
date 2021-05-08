<script lang="typescript">
  import { mdiDownload, mdiFingerprint, mdiCheck } from "@mdi/js";
  import { fly } from "svelte/transition";
  import Back from "../components/Back.svelte";
  import copy from "./copy";

  async function keyIsValid() {
    // Compare the copy on the webserver and the copy on GitHub
    try {
      const local = await (await fetch("./EmeraldSnorlax.pub.gpg")).text();
      const github = await (
        await fetch(
          "https://raw.githubusercontent.com/EmeraldSnorlax/website/main/public/EmeraldSnorlax.pub.gpg"
        )
      ).text();
      if (local === github) return true;
      else return false;
    } catch {
      return false;
    }
  }

  let copyIcon = mdiFingerprint;
  const keyFingerprint = "79C9 389B 5364 37A3 DE0A  FAC9 5793 0CE7 0D34 23B4";
</script>

<main in:fly={{ x: -600, duration: 400 }} out:fly={{ x: -600, duration: 400 }}>
  <div>
    <h2>OpenPGP</h2>
    <button
      on:click={async () => {
        if (await keyIsValid()) {
          window.open("./EmeraldSnorlax.pub.gpg");
        } else {
          if (
            confirm(
              "Uh, the keys don't match... Something suspicious is happening. Or GitHub might be down?\n\nDo you still want to download the key?\n\nI strongly reccomend that you don't!"
            )
          )
            window.open("./EmeraldSnorlax.pub.gpg");
        }
      }}
      class="download"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16px"
        height="16px"
        ><path d={mdiDownload} />
      </svg>
      Verify and download key</button
    >
    <button
      class="fingerprint"
      on:click={() => copy(keyFingerprint, () => (copyIcon = mdiCheck))}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16px"
        height="16px"
        ><path d={copyIcon} />
        <title>Copy Fingerprint</title>
      </svg>
      Copy fingerprint: <br />{keyFingerprint}</button
    >
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
  }
  div {
    width: 65%;
  }
  button {
    text-align: left;
    width: 100%;
    border: none;
    padding: 1em;
    border-radius: 5px;
    transition: 0.2s;
    margin-bottom: 1em;
    display: flex;
    align-items: center;
  }
  button:hover {
    filter: brightness(0.8);
  }
  .fingerprint {
    font-family: "Roboto Mono", "Courier New", Courier, monospace;
    background: #636363;
    color: white;
    fill: white;
  }
  svg {
    margin-right: 1em;
  }
</style>
