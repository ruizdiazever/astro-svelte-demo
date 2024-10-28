<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as m from "@paraglide/messages.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { Languages, ChevronDown } from "lucide-svelte";
    import { setCookiesData } from "@shared/utils";

    let position = "bottom";

    function setLang(lang: string) {
        const LANGUAGE_COOKIE_NAME = "preferredLang";
        const LANGUAGE_COOKIE_EXPIRATION = 365;
        setCookiesData(LANGUAGE_COOKIE_NAME, lang, LANGUAGE_COOKIE_EXPIRATION, "Lax");
        window.location.reload();
    }
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger asChild let:builder>
        <Button class="px-2" builders={[builder]} variant="ghost">
            <div class="flex items-center">
                <Languages class="h-4 w-4"/>
                <ChevronDown class="h-4 w-4"/>
            </div>
        </Button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
        <DropdownMenu.RadioGroup bind:value={position}>
            <DropdownMenu.Item class="cursor-pointer ease-in duration-150" on:click={() => setLang("en")}>
                {m.english()}
            </DropdownMenu.Item>
            <DropdownMenu.Item class="cursor-pointer ease-in duration-150" on:click={() => setLang("it")}>
                {m.italian()}
            </DropdownMenu.Item>
            <DropdownMenu.Item class="cursor-pointer ease-in duration-150" on:click={() => setLang("da")}>
                {m.danish()}
            </DropdownMenu.Item>
        </DropdownMenu.RadioGroup>
    </DropdownMenu.Content>
</DropdownMenu.Root>
