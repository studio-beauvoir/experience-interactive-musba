<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import SuspectButton from "$lib/components/SuspectButton.svelte";
    import PaintingAnimation from "$lib/components/PaintingAnimation.svelte";
    import Button from "$lib/components/Button.svelte";
    import TextButton from "$lib/components/TextButton.svelte";

    import {fade} from 'svelte/transition';
    import {ArrowLeft} from "radix-icons-svelte";
    import PaintingIntroduction from "$lib/components/PaintingIntroduction.svelte";
    import PaintingFeedback from "$lib/components/PaintingFeedback.svelte";

    export let painting;

    const transitionDuration = 500;

    let isShowingIntroduction: boolean;
    let isShowingFeedback: boolean;
    let inspectingSuspect: object | null;
    let accusedSuspect: object | null;

    resetLevel();

    const dispatch = createEventDispatcher();

    $:inspectingSuspectStyle = inspectingSuspect ? `transform: scale(4) translate(${13 - inspectingSuspect.face.x}%, ${-13 + inspectingSuspect.face.y}%);` : ''

    function resetLevel() {
        isShowingIntroduction = true;
        isShowingFeedback = false;
        inspectingSuspect = null;
    }

    function accuseSuspect() {
        accusedSuspect = {...inspectingSuspect};
        inspectingSuspect = null;
        isShowingFeedback = true;
    }

    function getFeebackText() {
        const text = {
            innocent: "Rien à voir, c'est un innocent !",
            witness: "Mh, presque, ce témoin a vu le complice.",
            accomplice: "Bien joué, c'est un complice !",
        }

        return text[accusedSuspect.type];
    }

    function dispatchSuspectAccused() {
        dispatch('suspect-selected', {
            suspect: inspectingSuspect
        });

        resetLevel();
    }

    function hideIntroduction() {
        isShowingIntroduction = false;
    }

    function inspectSuspect(suspect) {
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
            {#if isShowingIntroduction}
                <PaintingIntroduction painting={painting} transitionDuration={transitionDuration}/>
            {:else if isShowingFeedback}
                <PaintingFeedback accusedSuspect={accusedSuspect} transitionDuration={transitionDuration}/>
            {:else}
                <div transition:fade={{ delay: transitionDuration*1.2, duration: transitionDuration }}>
                    {#each painting.suspects as suspect}
                        <PaintingAnimation position={suspect.face} file="/lotties/{suspect.id}.json"/>
                        {#if !inspectingSuspect}
                            <SuspectButton suspect={suspect} handleClick={()=>inspectSuspect(suspect)}/>
                        {/if}
                    {/each}
                </div>
            {/if}
        </section>
        {#if inspectingSuspect}
            <TextButton handleClick={cancelSuspectInspection}
                        classList="absolute bottom-4 left-6">
                <span class="rounded-full decoration-rounded p-2 w-8 h-8 ">
                    <ArrowLeft class="h-full w-full"/>
                </span>
                <span class="text-cta">Changer de suspect</span>
            </TextButton>
        {/if}
    </section>
    {#if inspectingSuspect}
        <section class="relative h-56 w-full p-6 border-t border-yellow">
            <img class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
                 src="/images/figures/{inspectingSuspect.id}.jpg" alt=" ">
            <article class="flex flex-col justify-between h-full">
                <p class="mr-16">{inspectingSuspect.text}</p>
                <Button handleClick={accuseSuspect}>Accuser ce suspect</Button>
            </article>
        </section>
    {:else}
        <section class="relative h-44 w-full p-6 border-t border-yellow">
            <img class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
                 src="/images/figures/statue.jpg" alt=" ">
            {#if isShowingIntroduction}
                <article class="flex flex-col gap-4 h-full">
                    <p class="text-p mr-16">Il me semble l’avoir vu partir par là !</p>
                    <button class="text-white flex mt-auto ml-auto flex-row align-center items-center gap-3"
                            on:click={hideIntroduction}>
                        <span class="text-p">Continuer</span>
                        <span class="rounded-full decoration-rounded w-8 h-8 p-1">&#x2192</span>
                    </button>
                </article>
            {:else if isShowingFeedback}
                <article class="flex flex-col gap-4 h-full">
                    <p class="text-p mr-16">{getFeebackText()}</p>
                    <button class="text-white flex mt-auto ml-auto flex-row align-center items-center gap-3"
                            on:click={dispatchSuspectAccused}>
                        <span class="text-p">Continuer</span>
                        <span class="rounded-full decoration-rounded w-8 h-8 p-1">&#x2192</span>
                    </button>
                </article>
            {:else}
                <article class="flex flex-col gap-4 h-full">
                    <p class="text-p mr-16">{painting.statueDialog}</p>
                    <p class="text-label text-yellow">Interrogez un suspect en cliquant dessus</p>
                </article>
            {/if}
        </section>
    {/if}
</section>