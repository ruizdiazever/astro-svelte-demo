<script>
  import { Sun, MoonStar, MonitorSmartphone } from 'lucide-svelte';
  import { resetMode, setMode } from "mode-watcher";
  import { Button } from "$lib/components/ui/button/index.ts";
  import { onMount } from 'svelte';

  let storedMode;
  let selected = "border border-gray-200 dark:border-gray-800 rounded-full text-gray-900 dark:text-gray-300"
  let noSelect = "text-gray-500 dark:text-gray-600"

  onMount(() => {
    storedMode = localStorage.getItem('mode-watcher-mode') || 'system';
  });

  function updateMode(mode) {
    storedMode = mode;
    localStorage.setItem('mode-watcher-mode', mode);
    if (mode === 'system') {
      resetMode();
    } else {
      setMode(mode);
    }
  }
</script>

<div class="flex max-w-fit items-center rounded-2xl border border-gray-200 dark:border-gray-800 gap-1">
    <span class="sr-only">Display theme selector</span>
    <Button class="size-6 p-1 hover:scale-110 transition-all cursor-pointer
        {storedMode === 'system' ? selected : noSelect}"
        on:click={() => updateMode('system')} variant="ghost">
        <MonitorSmartphone/>
    </Button>
    <Button class="size-6 p-1 hover:scale-110 transition-all cursor-pointer
        {storedMode === 'light' ? selected : noSelect}"
        on:click={() => updateMode('light')} variant="ghost">
        <Sun/>
    </Button>
    <Button class="size-6 p-1 hover:scale-110 transition-all cursor-pointer
        {storedMode === 'dark' ? selected : noSelect}"
        on:click={() => updateMode('dark')} variant="ghost">
        <MoonStar/>
    </Button>
</div>
