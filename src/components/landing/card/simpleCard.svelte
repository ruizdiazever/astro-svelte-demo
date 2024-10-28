<script lang="ts">
    import { cn } from "$lib/utils";
    import Container from "./container.svelte";
    let className: any = "p-6";
    export { className as class };

    let cards = [
        {
            title: "Demo",
            desc: "Async Demo",
        },
        {
            title: "Top notch technology",
            desc: "Modern, flexible and secure",
        },
        {
            title: "Your company in boost mode",
            desc: "Modern, flexible and secure",
        },
    ];
</script>

<div class="grid gap-6 my-6 md:grid-cols-2">
    {#each cards as card, index}
        <Container className={index === 0 ? "col-span-2" : ""}>
            <div class="p-3 w-full flex justify-center items-center">
                <div class={cn("text-left", className)}>
                    <h3
                        class="text-lg font-bold mb-1 text-gray-900 dark:text-gray-200"
                    >
                        {card.title}
                    </h3>
                    <p class="text-gray-700 dark:text-gray-400">{card.desc}</p>
                </div>
            </div>
        </Container>
    {/each}
</div>
