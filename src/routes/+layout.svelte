<script>
    import '../app.css';
    import {ExitFullScreen, Move} from "radix-icons-svelte";
    import {isFullscreen, toggleFullScreen} from "$lib/stores/fullscreen";
    import {paintings} from "$lib/stores/paintings";
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
    <link href="/images/femme-nue-derriere.png" rel="prefetch"/>
    <link href="/images/painting-end.png" rel="prefetch"/>
</svelte:head>

<div class="relative h-full">
    <slot/>

    <section class="fixed top-4 right-4">
        <button class="text-yellow bg-black border border-yellow rounded-full p-2"
                on:click={toggleFullScreen}>
            {#if $isFullscreen}
                <ExitFullScreen class="h-5 w-5"/>
            {:else}
                <Move class="h-5 w-5 rotate-45"/>
            {/if}
        </button>
    </section>
</div>
