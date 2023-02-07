<script>
    import Button from "../lib/components/Button.svelte";
    import {goto} from "$app/navigation";
    import {toggleFullScreen} from "$lib/stores/fullscreen";

    function startIntro() {
        toggleFullScreen();
        goto('/game/intro')
    }

    function goToCredits() {
        goto('/credits')
    }
</script>

<div class="flex flex-col items-center justify-center h-full bg-black">
    <h1 class="text-yellow text-h2">Too well</h1>
    <h1 class="text-yellow text-h1">Stolen</h1>
    <img alt="" class="m-8" src="">
    <div class="flex flex-col gap-10">
        <Button handleClick={startIntro}>Jouer</Button>
        <Button handleClick={goToCredits}>Crédits</Button>
    </div>
</div>