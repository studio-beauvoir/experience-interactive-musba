<script lang="ts">
    import PrimaryButton from "$lib/components/Button/PrimaryButton.svelte";
    import {goto} from "$app/navigation";

    function startIntro() {
        goto('intro')
    }
</script>

<img alt="" class="absolute w-full z-0" src="/assets/triangle-svg.svg">
<section class="flex flex-col items-center justify-center h-full bg-black overflow-hidden px-14">
    <h1 class="text-yellow text-h2 z-10">Bon à</h1>
    <h1 class="text-yellow text-display z-10">Savoir</h1>
    <p class="text-label text-yellow text-center my-16 z-10">Pour profiter pleinement de l’expérience, l’idéal est de se
        trouver dans la salle “Les années 1910-1940 : du cubisme au retour à l’ordre”. <br><br> N’hésitez pas à y
        explorer les différentes œuvres et à rester attentifs à leurs personnages. Leurs répliques ne seront pas vos
        seuls indices...</p>
    <PrimaryButton handleClick={startIntro}>Continuer</PrimaryButton>
</section>