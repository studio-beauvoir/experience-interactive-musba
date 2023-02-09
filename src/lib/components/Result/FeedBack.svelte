<script>
    import {parcours} from "$lib/stores/parcours";
    import SuspectsTimeline from "$lib/components/SuspectsTimeline.svelte";

    export let suspects;

    $: accompliceFoundCount = suspects.filter(suspect => suspect.type === 'accomplice').length

    const accompliceCountSentences = {
        0: "mais vous n'avez trouvé aucun complice.",
        1: "mais vous n'avez trouvé qu'un des 3 complices.",
        2: "mais il vous manque un des 3 complice.",
        3: "et vous avez trouvé les 3 complices !"
    };

    function getParcoursFromSuspectsSelected() {
        const parcoursId = suspects.map(suspect => suspect.id).join('_');
        return $parcours[parcoursId];
    }
</script>
<div class="flex flex-col gap-4">
    <p class="text-p text-yellow text-center">
        Vous avez trouvé la serviette volée {accompliceCountSentences[accompliceFoundCount]}
    </p>

    <SuspectsTimeline suspects={suspects}/>

    <p class="text-p text-yellow text-center">Vous avez fait ces choix et réalisé la piste <span
            class="uppercase ">{getParcoursFromSuspectsSelected()}</span></p>
</div>