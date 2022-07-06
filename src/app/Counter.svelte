<script lang="ts">
  import "./global.css";
  import { createEventDispatcher } from "svelte";
  import Icon from "./Icon.svelte";

  export let count: number = 0;
  export let name: string = "Jack";
  const dispatch = createEventDispatcher();
  $: dispatch("change", count);
</script>

<h1 class="text-3xl font-bold underline">Hello world!</h1>

<p style="color:blue;">Count = {count}</p>
<p class="green">{name}</p>
<Icon width="24px" height="24px" />
<button class="bg" on:click={() => (count += 1)}>Increment</button>
<button class="xyz" on:click={() => (count -= 1)}>Decrement</button>

<style>
  .xyz {
    @apply bg-green-500;
  }
</style>
