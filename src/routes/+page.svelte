<script>
    import PrimaryButton from "$lib/components/Button/PrimaryButton.svelte";
    import {goto} from "$app/navigation";
    import {selectedSuspects} from "$lib/stores/selectedSuspects.ts";
    import {parcoursDone} from "$lib/stores/parcoursDone.ts";
    import SecondaryButton from "$lib/components/Button/SecondaryButton.svelte";

    function startGame() {
        selectedSuspects.reset();

        goto('/game/infos')
    }

    function goToCredits() {
        goto('/credits')
    }

    function goToCollection() {
        goto('/collection')
    }
</script>

<img alt=" " class="absolute h-full w-full z-0" src="/assets/triangle-svg.svg">
<section class="relative z-10 flex flex-col items-center justify-center h-full">
    <h2 class="text-yellow text-h1 pr-32">Too well</h2>
    <h1 class="text-yellow text-display">Stolen</h1>
    <section class="z-10 m-8 px-10 py-4">
        <picture>
            <source srcset="/images/home-page-image-min.webp" type="image/webp">
            <img alt="" class="h-auto" src="/images/home-page-image-min.png">
        </picture>
    </section>

    <section class="flex flex-col gap-4 w-full px-6">
        <PrimaryButton classList="w-full" handleClick={startGame}>Commencer l'expérience</PrimaryButton>
        <SecondaryButton classList="w-full" handleClick={goToCredits}>Crédits</SecondaryButton>
        {#if $parcoursDone.length}
            <SecondaryButton classList="w-full" handleClick={goToCollection}>Collection</SecondaryButton>
        {/if}
    </section>
</section>