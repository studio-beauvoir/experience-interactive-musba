<script>
    import Button from "../lib/components/Button.svelte";
    import {goto} from "$app/navigation";
    import {toggleFullScreen} from "$lib/stores/fullscreen";

    function startInfos() {
        toggleFullScreen();
        goto('/game/infos')
    }

    function goToCredits() {
        goto('/credits')
    }
</script>

<div class="flex flex-col items-center justify-center h-full bg-black">
    <img class="absolute h-full w-full z-0" src="/assets/triangle-svg.svg" alt="">
    <h1 class="text-yellow text-h2 z-10">Too well</h1>
    <h1 class="text-yellow text-display z-10">Stolen</h1>
    <img alt="" class="m-8" src="">
    <div class="flex flex-col gap-10">
        <Button handleClick={startInfos}>Jouer</Button>
        <Button handleClick={goToCredits}>Crédits</Button>
    </div>
</div>