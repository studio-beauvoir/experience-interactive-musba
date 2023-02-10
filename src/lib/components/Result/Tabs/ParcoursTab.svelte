<script>
    import {parcours} from "$lib/stores/parcours.ts";
    import {paintings} from "$lib/stores/paintings.ts";
    import {parcoursDone} from "$lib/stores/parcoursDone.ts";
    import SecondaryButton from "$lib/components/Button/SecondaryButton.svelte";
    import ComicsStrip from "$lib/components/Comic/ComicsStrip.svelte";
    import Top3Section from "$lib/components/Result/Top3Section.svelte";
    import SuspectsTimeline from "$lib/components/Suspect/SuspectsTimeline.svelte";
    import {LockClosed, MagnifyingGlass} from "radix-icons-svelte";

    export let laureates;


    let showingParcours = null;

    function showParcours(parcoursId) {
        const suspectsIds = parcoursId.split('_');
        showingParcours = {
            id: parcoursId,
            letter: $parcours[parcoursId],
            suspects: $paintings.map((painting, index) => painting.suspects.find(suspect => suspect.id === suspectsIds[index]))
        }
        document.documentElement.scrollTo(0, 0);
    }

    function backToAllParcours() {
        showingParcours = null;
    }
</script>

<section class="flex flex-col gap-16 justify-between w-full px-6 text-white">
    {#if showingParcours}
        <section class="flex flex-col gap-16">
            <SecondaryButton handleClick={backToAllParcours}>Retour aux parcours</SecondaryButton>
            <article>
                <h2 class="text-h2 text-yellow pb-4">Parcours</h2>
                <section class="grid grid-cols-5 gap-4 items-end">
                    <h1 class="col-span-2 font-display text-[12rem] leading-none uppercase text-yellow -mb-4">{showingParcours.letter}</h1>
                    <section class="col-span-3 flex flex-col items-start gap-2">
                        <p class="text-p">Les accusés de ce parcours</p>
                        <SuspectsTimeline suspects={showingParcours.suspects} classList="w-auto" />
                    </section>
                </section>
            </article>

            <div class="bg-brown h-px -mx-6"></div>

            <article class="flex flex-col gap-10">
                <h2 class="text-h1 text-yellow">BD de ce parcours</h2>
                <ComicsStrip suspects={showingParcours.suspects}/>
            </article>
        </section>
    {:else}
        <Top3Section laureates={laureates}/>

        <div class="bg-brown h-px -mx-6"></div>

        <section class="flex flex-col gap-4">
            <h2 class="text-h1 text-yellow">Découvrez tout !</h2>

            <p class="text-p text-white">
                Voici tous les parcours existants de l’expérience interactive Too Well Stolen.
            </p>
            <p class="text-p text-white">
                27 chemins y sont disponibles.
            </p>
        </section>

        <section class="grid grid-cols-3 gap-12 text-yellow">
            {#each Object.entries($parcours) as [parcoursId, parcoursLetter], i}
                {#if $parcoursDone.includes(parcoursId)}
                    <button class="relative flex items-center justify-center"
                            on:click={()=>showParcours(parcoursId)}>
                        <img class="animation-triangle absolute -z-10" src="/assets/triangle-parcours.svg" alt="parcours" style="animation-delay: 0.{Math.round(Math.random()*10)}s"/>
                        <div class="absolute -bottom-1 right-50 text-brown">
                            <MagnifyingGlass class="h-full w-full"/>
                        </div>
                        <span class="text-drop-capital uppercase text-yellow">{parcoursLetter}</span>
                    </button>
                {:else}
                    <span class="relative flex items-center justify-center">
                        <img class="absolute -z-10" src="/assets/triangle-parcours.svg" alt="parcours" style="animation-delay: 0.{Math.round(Math.random()*10)}s"/>
                        <div class="absolute -bottom-1 right-50 text-brown">
                        <LockClosed class="h-full w-full"/>
                        </div>
                        <span class="text-drop-capital uppercase text-brown">{parcoursLetter}</span>
                    </span>
                {/if}
            {/each}
        </section>
    {/if}
</section>