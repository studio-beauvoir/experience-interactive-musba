<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import SuspectButton from "$lib/components/SuspectButton.svelte";
    import PaintingAnimation from "$lib/components/PaintingAnimation.svelte";
    import {fade} from 'svelte/transition';

    export let painting;

    const transitionDuration = 500;

    let introductionDone = false;

    let inspectingSuspect = null;

    const dispatch = createEventDispatcher();

    $:inspectingSuspectStyle = inspectingSuspect ? `transform: scale(4) translate(${13 - inspectingSuspect.face.x}%, ${-13 + inspectingSuspect.face.y}%);` : ''

    function dispatchSuspectSelected() {
        dispatch('suspect-selected', {
            suspect: inspectingSuspect
        });

        introductionDone = false;
        inspectingSuspect = null;
    }

    function endIntroduction() {
        introductionDone = true;
    }

    function inspectSuspect(suspect: string) {
        inspectingSuspect = suspect
    }

    function cancelSuspectInspection() {
        inspectingSuspect = null;
    }
</script>

<section class="flex flex-col h-full">
    <section class="relative w-full flex-grow overflow-hidden">
        <section class="absolute bottom-0 h-min w-full origin-bottom-left"
                 style="{inspectingSuspectStyle}">
            <img alt="{painting.name}" class="relative bottom-0 h-auto w-full object-bottom "
                 src="{painting.image}"
            >

            {#if introductionDone}
                <div transition:fade={{ delay: transitionDuration*1.2, duration: transitionDuration }}>
                    {#each painting.suspects as suspect}
                        <PaintingAnimation position={suspect.face} file="/lotties/{suspect.id}.json"/>
                        {#if !inspectingSuspect}
                            <SuspectButton suspect={suspect} handleClick={()=>inspectSuspect(suspect)}/>
                        {/if}
                    {/each}
                </div>
            {:else}
                <article transition:fade={{ duration: transitionDuration }}
                         class="absolute inset-0 bg-semi-transparent flex flex-col gap-2 justify-center items-center">
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
                </article>
            {/if}
        </section>
        {#if inspectingSuspect}
            <button on:click={cancelSuspectInspection}
                    class="absolute text-cta px-4 py-2 decoration top-6 left-4 bg-black/20">
                Changer de coupable
            </button>
        {/if}
    </section>
    <section class="relative h-44 w-full p-6 border-t border-yellow">
        {#if inspectingSuspect}
            <img class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
                 src="/images/figures/{inspectingSuspect.id}.jpg" alt=" ">
            <article class="flex flex-col h-full">
                <p class="mr-16">{inspectingSuspect.text}</p>
                <button class="text-white flex mt-auto ml-auto flex-row align-center items-center gap-3"
                        on:click={dispatchSuspectSelected}>
                    <span class="text-p">Continuer</span>
                    <span class="rounded-full decoration-rounded w-8 h-8 p-1">&#x2192</span>
                </button>
            </article>
        {:else}
            <img class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
                 src="/images/figures/statue.jpg" alt=" ">
            {#if introductionDone}
                <article class="flex flex-col gap-4 h-full">
                    <p class="text-p mr-16">{painting.statueDialog}</p>
                    <p class="text-label text-yellow">Interrogez un suspect en cliquant dessus</p>
                </article>
            {:else}
                <article class="flex flex-col gap-4 h-full">
                    <p class="text-p mr-16">Il me semble l’avoir vu partir par là !</p>
                    <button class="text-white flex mt-auto ml-auto flex-row align-center items-center gap-3"
                            on:click={endIntroduction}>
                        <span class="text-p">Continuer</span>
                        <span class="rounded-full decoration-rounded w-8 h-8 p-1">&#x2192</span>
                    </button>
                </article>
            {/if}
        {/if}
    </section>
</section>