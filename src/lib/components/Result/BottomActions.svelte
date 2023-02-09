<script>
    import PrimaryButton from "$lib/components/Button/PrimaryButton.svelte";
    import {goto} from "$app/navigation";

    function goBackToHome() {
        goto('/')
    }

    function goToCredits() {
        goto('/credits')
    }
</script>

<section class="flex w-full justify-center gap-6 px-6">
    <PrimaryButton classList="w-full" handleClick={goBackToHome}>Retour au menu principal</PrimaryButton>
</section>