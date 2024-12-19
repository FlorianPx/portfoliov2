<script lang="ts">
  import headLogo from '@assets/headLogo.svg';
  import surprisedLogo from '@assets/surprisedLogo.svg';

  let showNav = $state(false);
  let showSuprisedFace = $state(false);

  $effect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight - 400) {
        showNav = true;
      } else {
        showNav = false;
      }
    });
  });
</script>

<nav
  class={`w-full h-16 bg-nav-bg fixed z-50 flex justify-center ${showNav ? 'visible opacity-100' : 'invisible opacity-0'} transition-opacity transition-visibility duration-300 ease-out`}
>
  <div class="absolute">
    <img
      alt="Logo de Florian Poux"
      onmouseenter={() => (showSuprisedFace = true)}
      onmouseleave={() => (showSuprisedFace = false)}
      src={showSuprisedFace ? surprisedLogo : headLogo}
      srcSet={showSuprisedFace ? surprisedLogo : headLogo}
    />
  </div>
</nav>
