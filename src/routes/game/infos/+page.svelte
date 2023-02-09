<script lang="ts">
    import PrimaryButton from "$lib/components/Button/PrimaryButton.svelte";
    import {goto} from "$app/navigation";

    function startIntro() {
        goto('intro')
    }
</script>

<img alt=" " class="absolute w-full" src="/assets/triangle-svg.svg">
<section class="relative flex flex-col items-center justify-center h-full overflow-hidden px-6">
    <p class="text-yellow text-h2">Votre</p>
    <h1 class="text-yellow text-display">Mission</h1>
    <p class="text-p text-white pt-16 pb-4">
        La <span class="font-bold">figure au bord de l’eau</span> vient de se faire dérober sa serviette de bain
        favorite.
        <br/>Encore sous le choc, elle vous attend au fond de l’<span class="font-bold">aile nord</span>, dans sa salle
        consacrée au <span class="font-bold">cubisme et au retour à l’ordre</span>.
    </p>
    <p class="text-p text-white pb-16">
        Fiez vous à ses intuitions ainsi qu’aux <span class="font-bold">répliques et émotions</span> des différents
        suspects de la salle...
    </p>
    <PrimaryButton classList="w-full" handleClick={startIntro}>Commencer l'enquête</PrimaryButton>
</section>
