<script>
    import {parcours} from "$lib/stores/parcours";
    import {selectedSuspects} from "$lib/stores/selectedSuspects";

    export let tabs;
    export let tabIndexSelected;
    export let onTabChange;

    $: tabsNotSelected = tabs.filter(tab => tab !== tabs[tabIndexSelected]);
    $: tabSelected = tabs[tabIndexSelected];

    function getParcoursFromSuspectsSelected() {
        const parcoursId = $selectedSuspects.map(suspect => suspect.id).join('_');
        return $parcours[parcoursId];
    }
</script>

<section class="absolute w-full translate-y-1/2 bottom-0 items-center flex overflow-x-hidden">
    <button class="bg-black w-full py-1 -mx-5 border-y border-yellow" on:click={()=>onTabChange(tabsNotSelected[0].id)}>
        <span class="block text-p py-2 px-10 w-full border-y border-yellow">
            {tabsNotSelected[0].label}
        </span>
    </button>
    <span class="z-10 bg-black p-1 rounded-full aspect-square border border-yellow">
        <span class="flex w-24 whitespace-nowrap text-center items-center justify-center text-h2 px-2 w-full rounded-full aspect-square border border-yellow">
            {tabSelected.label}
        </span>
    </span>
    <button class="bg-black w-full py-1 -mx-5 border-y border-yellow" on:click={()=>onTabChange(tabsNotSelected[1].id)}>
        <span class="block text-p py-2 px-10 w-full border-y border-yellow">
            {tabsNotSelected[1].label}
        </span>
    </button>
</section>