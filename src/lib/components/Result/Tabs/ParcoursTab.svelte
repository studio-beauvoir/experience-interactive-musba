<script>
    import {parcours} from "$lib/stores/parcours.ts";
    import {paintings} from "$lib/stores/paintings.ts";
    import Top3Section from "$lib/components/Result/Top3Section.svelte";
    import ParcoursGrid from "$lib/components/Parcours/ParcoursGrid.svelte";
    import ParcoursDetails from "$lib/components/Parcours/ParcoursDetails.svelte";

    export let laureates;

    let showingParcours = null;

    function showParcours(parcoursId) {
        const suspectsIds = parcoursId.split('_');
        showingParcours = {
            id: parcoursId,
            letter: $parcours[parcoursId],
            suspects: {
                1: $paintings[0].suspects.find(suspect => suspect.id === suspectsIds[0]),
                2: $paintings[1].suspects.find(suspect => suspect.id === suspectsIds[1]),
                3: $paintings[2].suspects.find(suspect => suspect.id === suspectsIds[2]),
            }
        }
        document.documentElement.scrollTo(0, 0);
    }

    function backToAllParcours() {
        showingParcours = null;
    }
</script>

<section class="flex flex-col gap-16 justify-between w-full px-6 text-white">
    {#if showingParcours}
        <ParcoursDetails parcours={showingParcours} handleDetailsQuit={backToAllParcours}/>
    {:else}
        <section class="flex flex-col gap-16">
            <Top3Section laureates={laureates}/>

            <div class="bg-brown h-px -mx-6"></div>

            <ParcoursGrid handleParcoursClick={showParcours}/>
        </section>
    {/if}
</section>