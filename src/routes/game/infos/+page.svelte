<script lang="ts">
    import PrimaryButton from "$lib/components/Button/PrimaryButton.svelte";
    import {goto} from "$app/navigation";

    function startIntro() {
        goto('intro')
    }
</script>

<img alt=" " class="absolute w-full" src="/assets/triangle-svg.svg">
<section class="relative flex flex-col items-center justify-center h-full overflow-hidden px-14">
    <p class="text-yellow text-h2">Votre</p>
    <h1 class="text-yellow text-display">Mission</h1>
    <p class="text-p text-yellow text-center pt-16 pb-4">
        Pour profiter pleinement de l’expérience, l’idéal est de se trouver dans la salle “Les années 1910-1940 : du
        cubisme au retour à l’ordre”.
    </p>
    <p class="text-p text-yellow text-center pb-16">
        N’hésitez pas à y explorer les différentes œuvres et à rester attentifs à leurs personnages. Leurs répliques
        ne
        seront pas vos seuls indices...
    </p>
    <PrimaryButton handleClick={startIntro}>Commencer l'enquête</PrimaryButton>
</section>
