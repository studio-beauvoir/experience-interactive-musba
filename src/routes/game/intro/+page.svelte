<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import {goto} from "$app/navigation";

    function startGame() {
        goto('/game')
    }
</script>

<!-- <div class="flex flex-col items-center justify-center h-full bg-black">
    <h1 class="text-yellow text-h1">Too well stolen</h1>
    <p class="flex text-center">Pour profiter pleinement de l’expérience, l’idéal est de se trouver au Musée des Beaux Arts de Bordeaux. <br><br> Et plus précisément dans la salle “Les années 1910-1940 : du cubisme au retour à l’ordre”. <br><br> N’hésitez pas à y explorer les différentes œuvres et à rester attentifs à leurs personnages. Leurs répliques ne seront pas vos seuls indices...</p>
    <Button handleClick={startGame}>Continuer</Button>
</div> -->

<div class="flex flex-col items-center justify-center h-full bg-black">
    <div class="w-full h-16 z-10 bg-black absolute top-0">
    
    </div>
    <img src="/images/femme-nue-derriere.png" class="h-full w-full z-0" alt="Sculture vue de derrière nommée Femme nue au bord de l'eau">
    <div class="w-full h-40 z-10 bg-black absolute bottom-0 p-6">
        <p class="text-p text-white flex-grow">Une personne malveillante vient de voler ma serviette...</p>
        <div class="flex h-16 items-end flex-shrink">
            <button on:click={startGame} class="flex ml-auto flex-row align-center items-center gap-3">
                <p class="text-p h-full align-center text-white justify-self-start">Continuer</p>
                <div class="decoration-rounded w-8 h-8 rounded-full text-white p-1">&#x2192</div>
            </button>
        </div>
        
    </div>
</div>