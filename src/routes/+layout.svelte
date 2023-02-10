<script>
    import '../app.css';
    import {paintings} from "$lib/stores/paintings";
    import {selectedSuspects} from "$lib/stores/selectedSuspects.ts";
    import {parcoursDone} from "$lib/stores/parcoursDone.ts";

    let audioGame = new Audio("/audio/A-Dream-Vintage-Music.mp3");
    let isAudioPlaying = false;

    selectedSuspects.load();
    parcoursDone.load();

    audioGame.play();

    $: isPlaying = audioGame.paused;

    function toggleMusic() {
        if (!audioGame.paused) {
            audioGame.pause();
            isAudioPlaying = false;
        } else {
            audioGame.play();
            isAudioPlaying = true;
        }
    }
</script>

<svelte:head>
    <!--    prefetch images-->
    {#each $paintings as painting}
        <link href="{painting.image}" rel="prefetch"/>
        {#each painting.suspects as suspect}
            <link href="/images/figures/{suspect.id}.jpg" rel="prefetch"/>
            <link href="/comics/{suspect.id}.png" rel="prefetch"/>
        {/each}
    {/each}
    <link href="/comics/start.png" rel="prefetch"/>
    <link href="/comics/end.png" rel="prefetch"/>
    <link href="/images/femme-nue-derriere.webp" rel="prefetch"/>
    <link href="/images/painting-end.webp" rel="prefetch"/>
</svelte:head>

<div class="relative h-full">
    <slot/>

    <section class="absolute top-4 right-4">
        <button class="text-yellow bg-black border border-yellow rounded-full p-2"
                on:click={toggleMusic}>
            {#if isAudioPlaying}
                <img class="h-5 w-5" src="/assets/sound.svg" alt="">
            {:else}
                <img class="h-5 w-5" src="/assets/noSound.svg" alt="">
            {/if}
        </button>
    </section>
</div>