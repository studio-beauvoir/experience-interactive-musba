<script lang="ts">
    import {fade} from 'svelte/transition';

    export let accusedSuspect;

    export let transitionDuration;

</script>

<article class="absolute inset-0 bg-semi-transparent flex flex-col gap-2 justify-center items-center"
         transition:fade={{ duration: transitionDuration }}>
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
</article>