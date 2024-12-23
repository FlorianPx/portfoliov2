<script lang="ts">
  import { createQuery, type CreateQueryResult } from '@tanstack/svelte-query';
  import AnimateLogo from '@components/AnimateLogo.svelte';
  import LogoListe from '@lib/components/LogoList.svelte';
  import type { Stacks } from '@lib/models/dataModels';
  import { fetchData } from '@lib/mocks/api';

  const query: CreateQueryResult<Stacks, Error> = createQuery({
    queryKey: ['fetch_stacks'],
    queryFn: () =>
      fetchData('stacks').then((values) =>
        (values as Stacks).filter((value) => value.is_mastered),
      ),
    enabled: true,
  });
</script>

<div
  class="flex flex-col-reverse lg:flex-row items-center justify-center lg:space-x-16"
>
  <div class="max-w-2xl space-y-4">
    <div class="flex items-center space-x-2">
      <span class="w-16 h-1 bg-purple"></span>
      <p class="text-base text-purple font-semibold uppercase">Florian Poux</p>
    </div>
    <p class="text-4xl font-normal leading-12 m-0 font-recoleta">
      Je suis développeur front-end.
    </p>
    <div class="flex flex-col text-lg text-light-purple">
      <p>Bienvenue sur mon portfolio !</p>
      <p class="text-justify max-w-xl">
        Vous y découvrirez mes skills, des projets réalisés seul ou en équipe,
        ainsi que mon CV pour mieux me connaître.
      </p>
      <p>Bonne visite !</p>
    </div>
    <LogoListe {query} />
  </div>
  <AnimateLogo />
</div>
