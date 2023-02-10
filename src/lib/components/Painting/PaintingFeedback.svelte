<script lang="ts">
    import {fade} from 'svelte/transition';

    export let painting;
    export let accusedSuspect;
    export let transitionDuration;
    export let handleClick;

</script>

<button class="absolute inset-0 bg-semi-transparent flex flex-col gap-4 pt-12 justify-center items-center"
        on:click={handleClick} transition:fade={{ duration: transitionDuration }}>

    <h2 class="text-h2 text-yellow">
        {painting.step}<sup>
        {#if painting.step}ère{:else}ème{/if}
    </sup>
        étape complétée !
    </h2>

    <section class="w-full flex gap-6 items-center">
        <section class="flex flex-col gap-2 w-32">
            <div class="bg-white h-px"></div>
            <div class="bg-white h-px mr-3"></div>
            <div class="bg-white h-px"></div>
        </section>

        <section class="text-center">
            <img src="/comics/{accusedSuspect.id}.png">
        </section>

        <section class="flex flex-col gap-2 w-32">
            <div class="bg-white h-px"></div>
            <div class="bg-white h-px ml-3"></div>
            <div class="bg-white h-px"></div>
        </section>
    </section>

    <p class="text-p px-6 text-center">{accusedSuspect.comicTitle}</p>
</button>