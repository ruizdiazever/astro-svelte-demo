<script>
    import { getCookiesData, removeCookiesSignIn } from "@shared/utils";
    import { onMount } from "svelte";
    import { Toaster, toast } from 'svelte-sonner'

    onMount(async () => {
        const showToast = (await getCookiesData("showToast")) === "true";

        if (showToast) {
            toast.success("Successfully logged in");
            await removeCookiesSignIn("showToast");
        }
    });
</script>

<Toaster richColors/>
