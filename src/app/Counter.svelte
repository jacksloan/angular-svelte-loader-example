<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import Icon from "./Icon.svelte";

  export let count: number = 0;
  export let name: string = "Jack";
  const dispatch = createEventDispatcher();
  $: dispatch("change", count);
</script>

<p>Count = {count}</p>
<p>{name}</p>
<Icon width="24px" height="24px" />
<button on:click={() => (count += 1)}>Increment</button>
<button on:click={() => (count -= 1)}>Decrement</button>
