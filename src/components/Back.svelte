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
