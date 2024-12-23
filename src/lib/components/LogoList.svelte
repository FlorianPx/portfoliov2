<script lang="ts">
  let { query } = $props();
</script>

<div>
  {#if $query.isLoading}
    <p>Loading...</p>
  {:else if $query.isError}
    <p>Error: {$query.error.message}</p>
  {:else if $query.isSuccess}
    <ul class="w-full flex flex-row space-x-4">
      {#each $query.data as stack}
        <li class="w-fit">
          <img
            src={stack.logo_url}
            alt={`Logo ${stack.name}`}
            class="w-fit h-6"
            title={stack.name}
            loading="lazy"
          />
        </li>
      {/each}
    </ul>
  {/if}
</div>
