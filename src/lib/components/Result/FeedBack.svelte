<script>
    import {parcours} from "$lib/stores/parcours";
    import SuspectsTimeline from "$lib/components/Suspect/SuspectsTimeline.svelte";

    export let suspects;

    $: accompliceFoundCount = suspects.filter(suspect => suspect.type === 'accomplice').length

    const accompliceCountSentences = {
        3: "Bravo ! Vous avez trouvé la serviette ainsi que les trois complices ! L’affaire est officiellement classée !",
        2: "Vous avez trouvé la serviette mais seulement avec deux des trois complices.",
        1: "Vous avez trouvé la serviette mais seulement avec un seul des trois complices.",
        0: "Dommage, vous avez trouvé la serviette sans aucun des trois complices. On ignore comment elle a été volée..."
    };

    function getParcoursFromSuspectsSelected() {
        const parcoursId = suspects.map(suspect => suspect.id).join('_');
        return $parcours[parcoursId];
    }
</script>
<div class="flex flex-col gap-8">
    <p class="text-p text-white text-center">
        {accompliceCountSentences[accompliceFoundCount]}
    </p>

    <SuspectsTimeline detailed={true} suspects={suspects}/>

    <p class="text-p text-white text-center">Vous avez fait ces choix et réalisé le parcours <span
            class="font-bold"><span
            class="uppercase">"{getParcoursFromSuspectsSelected()}"</span> parmi 27 parcours</span></p>
</div>