<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Drawer from "$lib/components/ui/drawer";
    import * as m from "@paraglide/messages.js";
    import { localizePathname } from "@shared/linking";
    import { languageTag } from "@paraglide/runtime";
</script>

<Drawer.Root>
    <Drawer.Trigger asChild let:builder>
        <Button class="rounded-full p-2" builders={[builder]} variant="outline">
            <slot name="menu"/>
        </Button>
    </Drawer.Trigger>
    <Drawer.Content>
        <div class="mx-auto w-full">
            <Drawer.Header>
                <Drawer.Title class="text-2xl">Demo</Drawer.Title>
                <Drawer.Description
                    >Enterprise Software Management</Drawer.Description
                >
            </Drawer.Header>
            <div class="px-4 pb-0">
                <div class="sm:hidden" id="mobile-menu">
                    <div class="space-y-1 px-2 pb-3 pt-2">
                        <a
                            href="https://astro.build/"
                            class="block rounded-md px-3 py-2 hover:bg-[#ebebeb] dark:hover:bg-[#1f1f1f]"
                            aria-current="page">Astro</a
                        >
                        <a
                            href="https://svelte.dev/docs/svelte/overview"
                            class="block rounded-md px-3 py-2 hover:bg-[#ebebeb] dark:hover:bg-[#1f1f1f]"
                            >Svelte</a
                        >
                    </div>
                </div>
            </div>
            <Drawer.Footer>
                <Drawer.Close asChild let:builder>
                    <Button builders={[builder]} variant="outline">Close</Button
                    >
                </Drawer.Close>
            </Drawer.Footer>
        </div>
    </Drawer.Content>
</Drawer.Root>
