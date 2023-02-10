<script lang="ts">
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import {paintings} from "$lib/stores/paintings";
    import PaintingLevel from "$lib/components/Painting/PaintingLevel.svelte";
    import {goto} from "$app/navigation";

    let painting = $selectedSuspects.length ? parseInt($selectedSuspects.length) : 0;

    checkGameEnd();

    async function handleLevelEnd() {
        painting++;

        setTimeout(checkGameEnd, 600);
    }

    function checkGameEnd() {
        if (painting >= $paintings.length) {
            goto('/game/end')
        }
    }

</script>

<section class="bg-black h-full text-white">
    {#if painting < $paintings.length}
        <PaintingLevel on:level-end={handleLevelEnd} painting={$paintings[painting]}/>
    {/if}
</section>