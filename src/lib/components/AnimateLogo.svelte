<script lang="ts">
  import logo from '@assets/logo.svg';
  import lines from '@assets/lines.svg';
  import lightEllipse from '@assets/lightEllipse.svg';
  import darkEllipse from '@assets/darkEllipse.svg';
  import gradiantEllipse from '@assets/gradiantEllipse.svg';
</script>

<div class="w-80 h-84 relative flex items-center justify-center mb-12 lg:mb-0">
  <img class="absolute z-0" alt="Logo du site" src={lines} />
  <img
    class="absolute z-10 bottom-3 right-1"
    alt="Logo du site"
    src={darkEllipse}
  />
  <img
    class="absolute z-20 top-2 right-6"
    alt="Logo du site"
    src={gradiantEllipse}
  />
  <img
    class="absolute z-30 -left-1 bottom-12"
    alt="Logo du site"
    src={lightEllipse}
  />
  <img class="absolute z-40" alt="Logo du site" src={logo} />
</div>
