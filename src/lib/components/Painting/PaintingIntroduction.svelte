<script lang="ts">
    import {fade} from 'svelte/transition';
    import {LottiePlayer} from '@lottiefiles/svelte-lottie-player';

    export let painting;
    export let transitionDuration;
    export let handleClick;

</script>

<button class="absolute inset-0 bg-semi-transparent gap-2 items-center text-white"
        on:click={handleClick} transition:fade={{ duration: transitionDuration }}>
    <section class="absolute top-5/10 w-full -translate-y-1/2">
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

    <section class="absolute top-3/10 w-full -translate-y-1/2 flex flex-col">
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
</button>