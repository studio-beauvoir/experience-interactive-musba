<script>
    import Button from "$lib/components/Button/Button.svelte";
    import {goto} from "$app/navigation";

    function startInfos() {
        goto('/game/infos')
    }

    function goToCredits() {
        goto('/credits')
    }
</script>

<div class="flex flex-col items-center justify-center h-full bg-black">
    <img alt=" " class="absolute h-full w-full z-0" src="/assets/triangle-svg.svg">
    <h1 class="text-yellow text-h2 z-10">Too well</h1>
    <h1 class="text-yellow text-display z-10">Stolen</h1>
    <div class="z-10 m-8 px-10 py-4">
        <img alt="" class="h-auto" src="/images/home-page-image.png">
    </div>
    <div class="flex flex-col gap-10">
        <Button handleClick={startInfos}>Jouer</Button>
        <Button handleClick={goToCredits}>Crédits</Button>
    </div>
</div>