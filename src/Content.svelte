<script lang="typescript">
  import { fly } from "svelte/transition";
  import { backInOut } from "svelte/easing";
</script>

<div
  in:fly={{ y: 300, duration: 1500, easing: backInOut, delay: 200 }}
  class="container"
>
  <div in:fly={{ x: -200, duration: 1000, easing: backInOut, delay: 1000 }}>
    <h1>
      Hello!
    </h1>
    <h2>I'm Rain.</h2>
  </div>
</div>

<style>
  div.container {
    color: white;
    display: flex;
    margin: 5%;
    background: #323232;
    padding: 1em;
    border-radius: 1em;
  }
  @media (min-width: 1200px) {
    div.container {
      max-width: 40%;
      margin: 5% 0 auto 5%;
    }
  }
  h1 {
    font-size: 400%;
  }
  h2 {
    font-size: 200%;
  }
</style>
