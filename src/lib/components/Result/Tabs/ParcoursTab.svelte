<script>
    import {parcours} from "$lib/stores/parcours.ts";
    import {paintings} from "$lib/stores/paintings.ts";
    import SecondaryButton from "$lib/components/SecondaryButton.svelte";
    import ComicsStrip from "$lib/components/ComicsStrip.svelte";
    import Top3Section from "$lib/components/Result/Top3Section.svelte";

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
                <h2 class="text-h2">Le parcours</h2>
                <section class="grid grid-cols-5 gap-4">
                    <h1 class="col-span-2 text-drop-capital uppercase text-yellow">{showingParcours.letter}</h1>
                    <section class="col-span-3 flex flex-col">
                        <p class="text-p">Les accusés de ce parcours</p>
                        <section class="w-full flex gap-2">
                            {#each showingParcours.suspects as suspect}
                                <div>
                                    <img class="w-full" src="/images/figures/{suspect.id}.jpg"/>
                                </div>
                            {/each}
                        </section>
                    </section>
                </section>
            </article>

            <article>
                <h2 class="text-h2 mb-4">La bande dessinée de ce parcours</h2>
                <ComicsStrip suspects={showingParcours.suspects}/>
            </article>
        </section>
    {:else}
        <Top3Section laureates={laureates}/>

        <div class="bg-brown h-px"></div>

        <section class="flex flex-col gap-4">
            <h2 class="text-h1">Découvrez tout !</h2>

            <p class="text-label">
                Voici tous les parcours existants de l’expérience interactive Too Well Stolen.
                27 chemins y sont disponibles.
            </p>
        </section>

        <section class="grid grid-cols-3 gap-12 text-yellow">
            {#each Object.entries($parcours) as [parcoursId, parcoursLetter], i}
                <button class="relative flex items-center justify-center"
                        on:click={()=>showParcours(parcoursId)}>
                    <img class="animation-triangle absolute -z-10" src="/assets/triangle-parcours.svg" alt="parcours" style="animation-delay: 0.{Math.round(Math.random()*10)}s"/>
                    <span class="text-drop-capital uppercase">{parcoursLetter}</span>
                </button>
            {/each}
        </section>
    {/if}
</section>