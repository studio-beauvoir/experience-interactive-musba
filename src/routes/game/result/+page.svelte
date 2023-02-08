<script lang="ts">
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import {parcours} from "$lib/stores/parcours";
    import {paintings} from "$lib/stores/paintings";
    import BottomActions from "$lib/components/Result/BottomActions.svelte";
    import PathTab from "$lib/components/Result/PathTab.svelte";
    import Tabs from "$lib/components/Result/Tabs.svelte";
    import Top3Tab from "$lib/components/Result/Top3Tab.svelte";
    import ParcoursTab from "$lib/components/Result/ParcoursTab.svelte";

    selectedSuspects.set([
        $paintings[0].suspects[0],
        $paintings[1].suspects[0],
        $paintings[2].suspects[0],
    ])

    const tabs = [
        {
            id: 'parcours',
            label: 'Parcours'
        },
        {
            id: 'path',
            label: 'Piste'
        },
        {
            id: 'top3',
            label: 'Top 3'
        },
    ];

    let laureates = {
        win: '&',
        highest: '?',
        lowest: '?'
    }

    let tabIndexSelected = 0;

    // saveResultsToDatabase()
    getStatsFromDatabase();

    function handleTabChange(event) {
        tabIndexSelected = tabs.findIndex(tab => tab.id === event.detail.tab.id);
    }

    function getParcoursFromSuspectsSelected() {
        const parcoursId = $selectedSuspects.map(suspect => suspect.id).join('_');
        return $parcours[parcoursId];
    }

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


    async function getStatsFromDatabase() {
        const data = await fetch('/api/stats', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })

        const jsonData = await data.json();

        jsonData.sort((a, b) => a.total - b.total)

        const lowestId = jsonData[0]._id.selectedSuspects.join('_');
        const highestID = jsonData[jsonData.length - 1]._id.selectedSuspects.join('_');

        laureates.highest = $parcours[highestID];
        laureates.lowest = $parcours[lowestId];
    }
</script>

<section class="z-0 relative min-h-full bg-black text-yellow">

    <section class="sticky z-10 top-0 w-full bg-black">
        <img alt="" class="absolute -z-10 top-0 right-0" src="/assets/lines-svg.svg">

        <article class="flex flex-col pt-12 px-6 items-center">
            <h2 class="text-soft-display mr-28">Mystère</h2>
            <h1 class="text-display">Résolu !</h1>
        </article>

        <div class="relative w-full pt-24">
            <Tabs on:tab-change={handleTabChange} tabIndexSelected={tabIndexSelected} tabs={tabs}/>
        </div>
    </section>

    <section class="relative pt-28 pb-16 flex flex-col gap-16 items-center justify-center">
        <img alt="" class="absolute -z-10 top-30 right-0" src="/assets/triangle-solo-1.svg">

        {#if tabs[tabIndexSelected].id === 'path'}
            <PathTab/>
        {:else if tabs[tabIndexSelected].id === 'top3'}
            <Top3Tab laureates={laureates}/>
        {:else if tabs[tabIndexSelected].id === 'parcours'}
            <ParcoursTab/>
        {/if}

        <BottomActions/>
    </section>

</section>