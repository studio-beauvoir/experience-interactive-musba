<script lang="ts">
    import {fade} from 'svelte/transition';

    export let painting;
    export let transitionDuration;
    export let handleClick;

</script>

<button class="absolute inset-0 bg-semi-transparent flex flex-col gap-2 justify-center items-center text-white"
        on:click={handleClick} transition:fade={{ duration: transitionDuration }}>
    <section class="w-full flex gap-6 items-center">
        <section class="flex flex-col gap-2 w-full">
            <div class="bg-white h-px"></div>
            <div class="bg-white h-px mr-3"></div>
            <div class="bg-white h-px"></div>
        </section>

        <section class="text-center">
            <h1 class="text-h1 italic">{painting.name}</h1>
        </section>

        <section class="flex flex-col gap-2 w-full">
            <div class="bg-white h-px"></div>
            <div class="bg-white h-px ml-3"></div>
            <div class="bg-white h-px"></div>
        </section>
    </section>

    <p class="text-p">{painting.author}, {painting.date}</p>
</button>