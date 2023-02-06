<script lang="ts">
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import {paintings} from "$lib/stores/paintings";
    import PaintingLevel from "$lib/components/PaintingLevel.svelte";
    import {goto} from "$app/navigation";

    let painting = 0;

    selectedSuspects.set([]);

    function handleSuspectSelection(event) {
        selectedSuspects.update(function (s) {
            s.push(event.detail.suspect)
            return s;
        });

        painting++;

        if (painting >= $paintings.length) {
            goto('/game/end')
        }
    }
</script>

<section class="bg-black h-full text-white">
    {#if painting < $paintings.length}
        <PaintingLevel on:suspect-selected={handleSuspectSelection} painting={$paintings[painting]}/>
    {/if}
</section>