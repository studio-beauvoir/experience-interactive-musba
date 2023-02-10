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
        <ParcoursDetails parcours={showingParcours} handleDetailsQuit={backToAllParcours}/>
    {:else}
        <section class="flex flex-col gap-16">
            <Top3Section laureates={laureates}/>

            <div class="bg-brown h-px -mx-6"></div>

            <ParcoursGrid handleParcoursClick={showParcours}/>
        </section>
    {/if}
</section>