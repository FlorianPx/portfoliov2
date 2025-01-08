<script lang="ts">
  import SkillsTooltip from './SkillsTooltip.svelte';

  let { query } = $props();
</script>

<div>
  {#if $query.isLoading}
    <p>Loading...</p>
  {:else if $query.isError}
    <p>Error: {$query.error.message}</p>
  {:else if $query.isSuccess}
    <ul class="w-full flex flex-row">
      {#each $query.data as stack}
        <li class="w-fit">
          <SkillsTooltip skill={stack} />
        </li>
      {/each}
    </ul>
  {/if}
</div>
