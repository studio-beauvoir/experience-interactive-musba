<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import SuspectButton from "$lib/components/Suspect/SuspectButton.svelte";
    import SuspectEmotion from "$lib/components/Suspect/SuspectEmotion.svelte";
    import PrimaryButton from "$lib/components/Button/PrimaryButton.svelte";
    import TextButton from "$lib/components/Button/TextButton.svelte";
    import PaintingFeedback from "$lib/components/Painting/PaintingFeedback.svelte";
    import PaintingIntroduction from "$lib/components/Painting/PaintingIntroduction.svelte";
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import {fade} from 'svelte/transition';
    import {Reset} from "radix-icons-svelte";
    import SuspectsTimeline from "$lib/components/Suspect/SuspectsTimeline.svelte";
    import DialogButton from "$lib/components/Button/DialogButton.svelte";
    import PaintingDialog from "$lib/components/Painting/PaintingDialog.svelte";

    export let painting;

    const transitionDuration = 500;

    let isShowingIntroduction: boolean;
    let isShowingFeedback: boolean;
    let inspectingSuspect: object | null;
    let accusedSuspect: object | null;

    resetLevel();

    const dispatch = createEventDispatcher();

    $:inspectingSuspectStyle = inspectingSuspect ? `transform: scale(4) translate(${11 - inspectingSuspect.zoom.x}%, ${-10 + inspectingSuspect.zoom.y}%);` : ''

    function resetLevel() {
        isShowingIntroduction = true;
        isShowingFeedback = false;
        inspectingSuspect = null;
    }

    function accuseSuspect() {
        audioPaintingButton();

        accusedSuspect = {...inspectingSuspect};

        selectedSuspects.accuse(accusedSuspect);

        inspectingSuspect = null;
        isShowingFeedback = true;
    }

    function getFeedbackText() {
        const text = {
            innocent: "Rien à voir, c'est un innocent !",
            witness: "Mh, presque, ce témoin a vu le complice.",
            accomplice: "Bien joué, c'est un complice !",
        }

        return text[accusedSuspect.type];
    }

    let audioPainting = new Audio("/audio/soundEffect/FeedBack-Fin-de-tableau.mp3");

    function audioPaintingButton() {
        audioPainting.play();
    }

    function dispatchSuspectAccused() {
        dispatch('level-end');

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
            <picture>
                <source srcset="{painting.image}.webp" type="image/webp">
                <img alt=" "
                     class="relative bottom-0 h-auto w-full object-bottom"
                     src="{painting.image}.png">
            </picture>
            {#if !isShowingIntroduction && !isShowingFeedback}
                <div transition:fade={{ delay: transitionDuration*1.2, duration: transitionDuration }}>
                    {#each painting.suspects as suspect}
                        {#if !inspectingSuspect || inspectingSuspect === suspect}
                            <SuspectEmotion {suspect}/>
                        {/if}
                        {#if !inspectingSuspect}
                            <SuspectButton suspect={suspect} handleClick={()=>inspectSuspect(suspect)}/>
                        {/if}
                    {/each}
                </div>
            {/if}
        </section>
        {#if inspectingSuspect}
            <button on:click={cancelSuspectInspection} class="absolute h-full w-full"></button>
        {/if}

        {#if !isShowingIntroduction && $selectedSuspects.length}
            <div class="absolute z-10 w-full left-0 top-4">
                <SuspectsTimeline suspects="{$selectedSuspects}"/>
            </div>
        {/if}

        {#if isShowingIntroduction}
            <PaintingIntroduction handleClick={hideIntroduction} painting={painting}
                                  transitionDuration={transitionDuration}/>
        {:else if isShowingFeedback}
            <PaintingFeedback handleClick={dispatchSuspectAccused} painting={painting} accusedSuspect={accusedSuspect}
                              transitionDuration={transitionDuration}/>
        {/if}
    </section>
    {#if inspectingSuspect}
        <PaintingDialog tall={true} figure={inspectingSuspect.id}>
            <p class="mr-16">{inspectingSuspect.text}</p>
            <div class="flex w-full justify-around">
                <TextButton handleClick={cancelSuspectInspection}
                            classList="bottom-4 left-6">
                        <span class="rounded-full decoration-rounded p-2 w-10 h-10 ">
                            <Reset class="h-full w-full"/>
                        </span>
                </TextButton>
                <PrimaryButton handleClick={accuseSuspect}>Accuser ce suspect</PrimaryButton>
            </div>
        </PaintingDialog>
    {:else}
        <PaintingDialog figure="statue">
            {#if isShowingIntroduction}
                <p class="text-p mr-16">{painting.introDialog}</p>
                <DialogButton handleClick={hideIntroduction}>Inspecter le tableau</DialogButton>
            {:else if isShowingFeedback}
                <p class="text-p mr-16">{getFeedbackText()}</p>
                <DialogButton handleClick={dispatchSuspectAccused}>Tableau suivant</DialogButton>
            {:else}
                <p class="text-p mr-16">{painting.statueDialog}</p>
                <p class="text-label text-yellow">Interrogez un suspect en cliquant dessus.</p>
            {/if}
        </PaintingDialog>
    {/if}
</section>