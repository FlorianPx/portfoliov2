<script lang="ts">
  import { createQuery, type CreateQueryResult } from '@tanstack/svelte-query';
  import AnimateLogo from '@components/AnimateLogo.svelte';
  import LogoListe from '@lib/components/LogoList.svelte';
  import type { Stacks } from '@lib/models/dataModels';
  import { supabase } from '@lib/supabase/supabaseClient';

  const fetchData = async () => {
    const { data } = await supabase
      .from(import.meta.env.VITE_TABLE_STACKS)
      .select()
      .eq('is_mastered', 1);
    return data || [];
  };

  const query: CreateQueryResult<Stacks, Error> = createQuery({
    queryKey: ['fetch_stacks'],
    queryFn: () =>
      fetchData().then((values) =>
        (values as Stacks).filter((value) => value.is_mastered),
      ),
    enabled: false,
  });
</script>

<section
  class="flex flex-col-reverse lg:flex-row items-center justify-center lg:space-x-16 xl:space-x-32"
>
  <div class="max-w-2xl space-y-4">
    <div class="flex items-center space-x-2">
      <span class="w-16 h-1 bg-purple"></span>
      <p class="text-base text-purple font-semibold uppercase">Florian Poux</p>
    </div>
    <h1 class="text-4xl font-normal leading-12 m-0 font-recoleta">
      Je suis développeur front-end.
    </h1>
    <div class="flex flex-col text-lg text-light-purple">
      <p>Bienvenue sur mon portfolio !</p>
      <p class="text-justify max-w-xl">
        Vous y découvrirez mes skills, des projets, ainsi que mon CV afin de
        mieux me connaître. Bonne visite !
      </p>
    </div>
    <LogoListe {query} />
  </div>
  <AnimateLogo />
</section>
