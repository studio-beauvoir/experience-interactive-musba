<script lang="ts">
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import {parcours} from "$lib/stores/parcours";
    import BottomActions from "$lib/components/Result/BottomActions.svelte";
    import PathTab from "$lib/components/Result/Tabs/PathTab.svelte";
    import ParcoursTab from "$lib/components/Result/Tabs/ParcoursTab.svelte";
    import Tabs from "$lib/components/Result/Tabs.svelte";
    import {goto} from "$app/navigation";
    // import {paintings} from "$lib/stores/paintings";

    // selectedSuspects.set([
    //     $paintings[0].suspects[0],
    //     $paintings[1].suspects[0],
    //     $paintings[2].suspects[0],
    // ])

    if (!$selectedSuspects.length) {
        goto('/');
    }

    const tabs = [
        {
            id: 'path',
            label: 'Votre piste'
        },
        {
            id: 'parcours',
            label: 'Parcours'
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

    async function getStatsFromDatabase() {
        const data = await fetch('/api/stats', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })

        const jsonData = await data.json();

        jsonData.sort((a, b) => a.total - b.total)

        const lowestId = jsonData[0]?._id?.selectedSuspects?.join('_');
        const highestID = jsonData[jsonData.length - 1]?._id?.selectedSuspects?.join('_');

        laureates.highest = $parcours[highestID] || '?';
        laureates.lowest = $parcours[lowestId] || '?';
    }
</script>

<section class="z-0 relative min-h-full bg-black text-yellow">

    <section>
        <img alt="" class="absolute -z-10 top-0 right-0" src="/assets/lines-svg.svg">

        <article class="flex flex-col pt-12 pb-8 px-6 items-center">
            <h2 class="text-soft-display mr-28">Mystère</h2>
            <h1 class="text-display">Résolu !</h1>
        </article>
    </section>

    <Tabs on:tab-change={handleTabChange} tabIndexSelected={tabIndexSelected} tabs={tabs}/>

    <section class="relative pt-16 pb-16 flex flex-col gap-16 items-center justify-center">
        {#if tabs[tabIndexSelected].id === 'path'}
            <PathTab/>
        {:else if tabs[tabIndexSelected].id === 'parcours'}
            <ParcoursTab laureates={laureates}/>
        {/if}

        <BottomActions/>
    </section>

</section>