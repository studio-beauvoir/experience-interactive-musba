<script lang="ts">
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import {parcoursDone} from "$lib/stores/parcoursDone";
    import {paintings} from "$lib/stores/paintings";
    import PaintingLevel from "$lib/components/Painting/PaintingLevel.svelte";
    import {goto} from "$app/navigation";

    let painting = $selectedSuspects.length ? $selectedSuspects.length : 0;

    if (isGameEnded()) {
        goto('/game/end')
    }

    async function handleLevelEnd() {
        painting++;

        setTimeout(checkGameEnd, 600);
    }

    function isGameEnded() {
        return painting >= $paintings.length;
    }

    function checkGameEnd() {
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
                selectedSuspectsIds: $selectedSuspects.map(suspect => suspect.id)
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

</script>

<section class="bg-black h-full text-white">
    {#if painting < $paintings.length}
        <PaintingLevel on:level-end={handleLevelEnd} painting={$paintings[painting]}/>
    {/if}
</section>