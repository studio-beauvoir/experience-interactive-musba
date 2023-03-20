<script lang="ts">
    import {fade} from 'svelte/transition';
    import {LottiePlayer} from '@lottiefiles/svelte-lottie-player';

    export let painting;
    export let transitionDuration;
    export let handleClick;

</script>

<button class="absolute inset-0 w-full bg-semi-transparent gap-2 flex flex-col justify-evenly items-center text-white"
        on:click={handleClick} transition:fade={{ duration: transitionDuration }}>
    <section class="w-full flex flex-col">
        <div class="relative h-24">
            <LottiePlayer
                    autoplay="{true}"
                    background="transparent"
                    loop="{true}"
                    renderer="svg"
                    src="/lotties/walk.json"
                    style="height: 100%; width: auto; aspect-ratio: 1 / 1; margin: auto"
            />
        </div>

        <p class="text-yellow italic">Marchez jusqu'au tableau</p>
    </section>

    <section class="w-full">
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

        <p class="text-p mt-2">{painting.author}, {painting.date}</p>
    </section>

    <section></section>
</button>