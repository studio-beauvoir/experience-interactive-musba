<script lang="ts">
    import {parcours} from "$lib/stores/parcours";
    import PrimaryButton from "$lib/components/Button/PrimaryButton.svelte";
    import {goto} from "$app/navigation";
    import ParcoursGrid from "$lib/components/Parcours/ParcoursGrid.svelte";
    import {paintings} from "$lib/stores/paintings";
    import ParcoursDetails from "$lib/components/Parcours/ParcoursDetails.svelte";

    function goBackToHome() {
        goto('/')
    }

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

<section class="z-0 relative min-h-full bg-black text-yellow">
    <img alt=" " class="absolute -z-10 top-0 right-0" src="/assets/lines-svg.svg">

    <article class="flex flex-col items-center py-16 px-6 gap-4">
        <h1 class="text-display">Collection</h1>
        <PrimaryButton classList="w-full" handleClick={goBackToHome} soundId="reverse">Retour au menu principal
        </PrimaryButton>
    </article>

    <section class="px-6 pb-16">
        {#if showingParcours}
            <ParcoursDetails parcours={showingParcours} handleDetailsQuit={backToAllParcours}/>
        {:else}
            <ParcoursGrid handleParcoursClick={showParcours}/>
        {/if}
    </section>
</section>