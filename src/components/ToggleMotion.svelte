<script lang="typescript">
  import { motion } from "../stores";

  function toggle() {
    if ($motion) {
      $motion = "";
    } else {
      $motion = "safe";
    }
  }
</script>

<button on:click={toggle}>Toggle animation</button>

<style>
  button {
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 0;
    border-top-left-radius: 5px;
    color: white;
    border: none;
    background-color: #323232;
    padding: 1em;
    transition: all 0.2s;
    cursor: pointer;
  }
  button:hover {
    filter: brightness(1.1);
  }
</style>
