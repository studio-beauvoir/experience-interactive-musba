<script>
    import {ExitFullScreen, Move} from "radix-icons-svelte";
    import {isFullscreen, toggleFullScreen} from "$lib/stores/fullscreen";
</script>
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