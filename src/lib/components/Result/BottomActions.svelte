<script>
    import Button from "$lib/components/Button.svelte";
    import SecondaryButton from "$lib/components/SecondaryButton.svelte";
    import {goto} from "$app/navigation";

    function goBackToHome() {
        goto('/')
    }

    function goToCredits() {
        goto('/credits')
    }
</script>

<section class="flex w-full justify-center gap-6 px-6">
    <SecondaryButton classList="w-full" handleClick={goToCredits}>Crédits</SecondaryButton>
    <Button classList="w-full" handleClick={goBackToHome}>Rejouer</Button>
</section>