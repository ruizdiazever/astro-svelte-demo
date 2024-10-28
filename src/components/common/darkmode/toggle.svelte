<script lang="ts">
    import { SunMoon, Sun, MoonStar, MonitorCog } from 'lucide-svelte';
    import { resetMode, setMode } from "mode-watcher";
    import { Button } from "$lib/components/ui/button";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
        <Button builders={[builder]} variant="ghost" size="icon">
            <Sun
                class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
            <MoonStar
                class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <span class="sr-only">Toggle theme</span>
        </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content align="end">
        <DropdownMenu.Item
            class="cursor-pointer ease-in duration-150"
            on:click={() => setMode("light")}>
        <Sun class="mr-2 h-4 w-4" />
        Light
        </DropdownMenu.Item>
        <DropdownMenu.Item
            class="cursor-pointer ease-in duration-150"
            on:click={() => setMode("dark")}>
        <MoonStar class="mr-2 h-4 w-4" />
            Dark
        </DropdownMenu.Item>
        <DropdownMenu.Item
            class="cursor-pointer ease-in duration-150"
            on:click={() => resetMode()}>
        <MonitorCog class="mr-2 h-4 w-4" />
            System
        </DropdownMenu.Item>
    </DropdownMenu.Content>
</DropdownMenu.Root>
