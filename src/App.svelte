<script lang="ts">
  import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query';

  import Home from './routes/Home.svelte';
  import Navbar from './lib/components/Navbar.svelte';

  import './app.css';

  const queryClient = new QueryClient();
</script>

<Navbar />

<QueryClientProvider client={queryClient}>
  <main class="w-screen h-screen flex items-center justify-center p-4 lg:p-8">
    <Home />
  </main>
</QueryClientProvider>
