<script>
    import Button from "$lib/components/Button.svelte";
    import {goto} from "$app/navigation";

    function goBackToHome() {
        goto('/')
    }

    function goToCredits() {
        goto('/credits')
    }
</script>

<section class="flex w-full justify-center gap-6 px-6">
    <Button classList="w-full" handleClick={goBackToHome}>Retour au menu principal</Button>
</section>