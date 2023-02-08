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

<section class="absolute w-full translate-y-1/2 bottom-0 bg-black border-y border-yellow py-1">
    <nav class="grid grid-cols-3 items-center border-y border-yellow px-6">
        {#each tabs as tab}
            <TabButton on:tab-change tab={tab} selected={tab.id === tabSelected.id}/>
        {/each}
    </nav>
</section>