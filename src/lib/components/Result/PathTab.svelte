<script>
    import ComicsStrip from "$lib/components/ComicsStrip.svelte";
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import {parcours} from "$lib/stores/parcours.ts";

    function getParcoursFromSuspectsSelected() {
        const parcoursId = $selectedSuspects.map(suspect => suspect.id).join('_');
        return $parcours[parcoursId];
    }
</script>

<section class="flex flex-col gap-16 px-6">
    <div>
        <p class="text-p text-yellow text-center">Vous avez eu une piste bien intéressante.</p>
        <p class="text-p text-yellow text-center">Vous avez réalisé le parcours <span
                class="uppercase ">{getParcoursFromSuspectsSelected()}</span></p>
    </div>
    <ComicsStrip suspects={$selectedSuspects}/>
</section>
