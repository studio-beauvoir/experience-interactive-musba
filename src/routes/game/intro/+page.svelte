<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import {goto} from "$app/navigation";

    function startGame() {
        goto('/game')
    }
</script>

<div class="flex flex-col items-center justify-center h-full bg-black">
    <h1 class="text-yellow text-h1">Too well stolen</h1>
    <p class="flex text-center">Pour profiter pleinement de l’expérience, l’idéal est de se trouver au Musée des Beaux Arts de Bordeaux. <br><br> Et plus précisément dans la salle “Les années 1910-1940 : du cubisme au retour à l’ordre”. <br><br> N’hésitez pas à y explorer les différentes œuvres et à rester attentifs à leurs personnages. Leurs répliques ne seront pas vos seuls indices...</p>
    <Button handleClick={startGame}>Continuer</Button>
</div>