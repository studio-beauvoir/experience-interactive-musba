<script>
    import '../app.css';
    import {paintings} from "$lib/stores/paintings";
    import {selectedSuspects} from "$lib/stores/selectedSuspects.ts";
    import {parcoursDone} from "$lib/stores/parcoursDone.ts";
    import * as Sentry from "@sentry/svelte";
    import {BrowserTracing} from "@sentry/tracing";

    let audioGame = new Audio("/audio/a-dream-vintage-music.mp3");
    let isAudioPlaying = false;

    selectedSuspects.load();
    parcoursDone.load();

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

    audioGame.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);

    Sentry.init({
        dsn: "https://754e4fba21574bab9ead78a769ba1013@o4504878242660352.ingest.sentry.io/4504878244036608",
        integrations: [new BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
</script>

<svelte:head>
    <!--    prefetch images-->
    {#each $paintings as painting}
        <link href="{painting.image}.webp" rel="prefetch"/>
        <link href="{painting.image}.png" rel="prefetch"/>
        {#each painting.suspects as suspect}
            <link href="/images/figures/{suspect.id}.jpg" rel="prefetch"/>
            <link href="/comics/{suspect.id}.png" rel="prefetch"/>
        {/each}
    {/each}
    <link href="/comics/start.png" rel="prefetch"/>
    <link href="/comics/end.png" rel="prefetch"/>

    <link href="/images/femme-nue-derriere.webp" rel="prefetch"/>
    <link href="/images/femme-nue-derriere.png" rel="prefetch"/>

    <link href="/images/painting-end-min.webp" rel="prefetch"/>
    <link href="/images/painting-end-min.png" rel="prefetch"/>
</svelte:head>

<div class="relative h-full">
    <slot/>

    <section class="absolute top-4 right-4 z-50">
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