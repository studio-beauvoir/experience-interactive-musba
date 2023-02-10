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

    let audioValidation = new Audio("/audio/soundEffect/Button-Click-Validation.mp3");
    let audioReverse = new Audio("/audio/soundEffect/Button-Click-Reverse.mp3");
    let audioPainting = new Audio("/audio/soundEffect/FeedBack-Fin-de-tableau.mp3");

    function audioValidationButton() {
        audioValidation.play();
    }

    function audioReverseButton() {
        audioReverse.play();
    }

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
            <img alt="{painting.name}" class="relative bottom-0 h-auto w-full object-bottom "
                 src="{painting.image}"
            >
            {#if !isShowingIntroduction && !isShowingFeedback}
                <div transition:fade={{ delay: transitionDuration*1.2, duration: transitionDuration }}>
                    {#each painting.suspects as suspect}
                        <SuspectEmotion
                                handleClick={()=>inspectingSuspect?cancelSuspectInspection():inspectSuspect(suspect)}
                                {suspect}/>
                        {#if !inspectingSuspect}
                            <SuspectButton suspect={suspect} handleClick={()=>inspectSuspect(suspect)}/>
                        {/if}
                    {/each}
                </div>
            {/if}
        </section>
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
        <section class="relative h-56 w-full p-6 border-t border-yellow">
            <img class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
                 src="/images/figures/{inspectingSuspect.id}.jpg" alt=" ">
            <article class="flex flex-col justify-between h-full">
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
            </article>
        </section>
    {:else}
        <section class="relative h-40 w-full p-6 border-t border-yellow">
            <img class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
                 src="/images/figures/statue.jpg" alt="Figure au bord de l'eau">
            {#if isShowingIntroduction}
                <article class="flex flex-col gap-4 h-full">
                    <p class="text-p mr-16">{painting.introDialog}</p>

                    <DialogButton handleClick={hideIntroduction}>Inspecter le tableau</DialogButton>
                </article>
            {:else if isShowingFeedback}
                <article class="flex flex-col gap-4 h-full">
                    <p class="text-p mr-16">{getFeedbackText()}</p>

                    <DialogButton handleClick={dispatchSuspectAccused}>Tableau suivant</DialogButton>
                </article>
            {:else}
                <article class="flex flex-col gap-4 h-full">
                    <p class="text-p mr-16">{painting.statueDialog}</p>
                    <p class="text-label text-yellow">Interrogez un suspect en cliquant dessus.</p>
                </article>
            {/if}
        </section>
    {/if}
</section>