<script lang="ts">
  import type { Stack, Tool } from '@lib/models/dataModels';

  const { skill }: { skill: Stack | Tool } = $props();
</script>

<div class="relative group">
  <div class="py-4 px-2">
    <img
      src={skill.logo_url}
      alt={`Logo ${skill.name}`}
      class="w-fit h-6 grayscale group-hover:grayscale-0"
      loading="lazy"
    />
  </div>
  <div
    class="w-72 h-fit absolute transition-shadow invisible group-hover:visible hover:visible bg-[#342b51] rounded-xl px-4 py-2 space-y-1"
  >
    <p class="text-center text-base">{skill.name}</p>
    <p class="text-sm">{skill.description}</p>
    <div class="w-full flex justify-end">
      <a
        href={skill.official_website}
        target="_blank"
        class="w-fit text-xs underline underline-offset-4 hover:decoration-2"
        >En savoir plus</a
      >
    </div>
  </div>
</div>
