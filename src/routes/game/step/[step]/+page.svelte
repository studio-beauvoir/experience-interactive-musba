<script lang="ts">
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import {parcoursDone} from "$lib/stores/parcoursDone";
    import {paintings} from "$lib/stores/paintings";
    import PaintingLevel from "$lib/components/Painting/PaintingLevel.svelte";
    import {goto} from "$app/navigation";
    import {page} from '$app/stores';

    $: step = parseInt($page.params.step);
    $: painting = $paintings.find(painting => painting.step == step);

    if (isGameEnded()) {
        goto('/game/end')
    }

    function handleStepEnd() {
        if (isGameEnded()) {
            handleGameEnded();
            return;
        }

        goto('/game/step/' + (step + 1));
    }

    function isGameEnded() {
        return step >= $paintings.length;
    }

    function handleGameEnded() {
        if (!isGameEnded()) {
            return;
        }

        saveParcoursDone();
        saveResultsToDatabase();

        goto('/game/end')
    }

    function saveParcoursDone() {
        parcoursDone.add($selectedSuspects)
    }

    async function saveResultsToDatabase() {
        await fetch('/api/stats', {
            method: 'POST',
            body: JSON.stringify({
                selectedSuspectsIds: [
                    $selectedSuspects[1].id,
                    $selectedSuspects[2].id,
                    $selectedSuspects[3].id
                ]
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

</script>

<section class="bg-black h-full text-white">
    {#if painting}
        <PaintingLevel on:level-end={handleStepEnd} {painting}/>
    {/if}
</section>