<script lang="ts">
    import BlurFade from "./blurFade.svelte";
    import { Button } from "$lib/components/ui/button";
    import BgDarkTiles from "./bgDarkTiles.svelte";
    import * as m from "@paraglide/messages.js";
    import { localizePathname } from "@shared/linking";
    import { languageTag } from "@paraglide/runtime";
</script>

<div
    class="w-full h-full min-h-[300px] relative overflow-hidden
    flex items-center justify-center"
>
    <div class="w-fit h-fit relative z-[2]">
        <span class="w-full h-[420px] block rounded-xl overflow-hidden">
            <div class="w-full h-full relative bg-grid-white/[0.03] px-4">
                <div
                    class="w-full h-full flex flex-col sm:items-center items-start justify-center relative z-[1] animate-moveUp"
                >
                    <BlurFade delay={0.25}>
                        <div
                            class="dark:text-transparent sm:text-center text-start font-bold sm:text-5xl text-4xl bg-clip-text bg-gradient-to-br from-white/60 via-neutral-300 dark:to-black/[0.6]"
                        >
                            {m.title()}
                        </div>
                    </BlurFade>
                    <BlurFade delay={0.25 * 2}>
                        <div
                            class="text-gray-800 dark:text-white/[0.7] sm:text-center text-start mt-3"
                        >
                            {m.message()}
                        </div>
                    </BlurFade>
                </div>
            </div>
        </span>
    </div>
    <div
        class="absolute top-0 left-0 h-full w-full [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
    >
        <BgDarkTiles r={20} c={10} />
    </div>
</div>
