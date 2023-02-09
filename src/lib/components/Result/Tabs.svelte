<script>
    import {parcours} from "$lib/stores/parcours";
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import TabButton from "$lib/components/Result/TabButton.svelte";

    export let tabs;
    export let tabIndexSelected;

    $: tabsNotSelected = tabs.filter(tab => tab !== tabs[tabIndexSelected]);
    $: tabSelected = tabs[tabIndexSelected];

    function getParcoursFromSuspectsSelected() {
        const parcoursId = $selectedSuspects.map(suspect => suspect.id).join('_');
        return $parcours[parcoursId];
    }
</script>

<section class="bg-black overflow-hidden">
    <div class="-mx-4 grid grid-cols-2 items-center">
        {#each tabs as tab}
            <TabButton on:tab-change tab={tab} selected={tab.id === tabSelected.id}/>
        {/each}
    </div>
</section>