<script lang="ts">
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import {parcours} from "$lib/stores/parcours";
    import {paintings} from "$lib/stores/paintings";
    import BottomActions from "$lib/components/Result/BottomActions.svelte";
    import PathTab from "$lib/components/Result/PathTab.svelte";
    import Tabs from "$lib/components/Result/Tabs.svelte";

    selectedSuspects.set([
        $paintings[0].suspects[0],
        $paintings[1].suspects[0],
        $paintings[2].suspects[0],
    ])

    let tabs = [
        {
            id: 'path',
            label: 'Piste'
        },
        {
            id: 'parcours',
            label: 'Parcours'
        },
        {
            id: 'top3',
            label: 'Top 3'
        },
    ];

    let tabIndexSelected = 0;

    function handleTabChange(newTabId) {
        tabIndexSelected = tabs.findIndex(tab => tab.id === newTabId);
    }

    function getParcoursFromSuspectsSelected() {
        const parcoursId = $selectedSuspects.map(suspect => suspect.id).join('_');
        return $parcours[parcoursId];
    }

    getParcoursFromSuspectsSelected()

    function getTraducedSuspectType(suspect) {
        const trad = {
            innocent: "Innocent",
            witness: "Témoin",
            accomplice: "Complice"
        }

        return trad[suspect.type];
    }

    async function saveResultsToDatabase() {
        await fetch('/api/stats', {
            method: 'POST',
            body: JSON.stringify({
                selectedSuspects: $selectedSuspects.map(suspect => suspect.id)
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
    }

    // saveResultsToDatabase()
</script>

<section class="z-0 relative min-h-full bg-black text-yellow">

    <section class="sticky z-10 top-0 w-full bg-black">
        <img alt="" class="absolute -z-10 top-0 right-0" src="/assets/lines-svg.svg">

        <article class="flex flex-col pt-12 px-6 items-center">
            <h2 class="text-soft-display mr-28">Mystère</h2>
            <h1 class="text-display">Résolu !</h1>
        </article>

        <div class="relative w-full pt-24">
            <Tabs onTabChange={handleTabChange} tabIndexSelected={tabIndexSelected} tabs={tabs}/>
        </div>
    </section>

    <section class="relative pt-28 pb-16 flex flex-col gap-16 items-center justify-center">
        <img alt="" class="absolute -z-10 top-30 right-0" src="/assets/triangle-solo-1.svg">

        {#if tabs[tabIndexSelected].id === 'path'}
            <PathTab/>
        {/if}

        <BottomActions/>
    </section>

</section>