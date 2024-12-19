<script lang="ts">
  import { createQuery, type CreateQueryResult } from '@tanstack/svelte-query';

  import { fetchData } from '../mocks/api';
  // import { supabase } from './supabaseClient';
  import type { Stacks } from '../models/dataModels';

  // const fetchData = async () => {
  //   const { data } = await supabase
  //     .from(import.meta.env.VITE_TABLE_TOOLS)
  //     .select();

  //   console.log({ data });
  //   return data || [];
  // };

  const query: CreateQueryResult<Stacks, Error> = createQuery({
    queryKey: ['fetch_table_stacks'],
    queryFn: () => fetchData('stacks'),
    enabled: true,
  });
</script>

{#if $query.isLoading}
  <p>Loading...</p>
{:else if $query.isError}
  <p>Error: {$query.error.message}</p>
{:else if $query.isSuccess}
  <ul>
    {#each $query.data as stacks}
      <li><img src={stacks.logo_url} alt={stacks.name} />{stacks.name}</li>
    {/each}
  </ul>
{/if}
