<script lang="ts">
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import {parcours} from "$lib/stores/parcours";
    import PrimaryButton from "$lib/components/Button/PrimaryButton.svelte";
    import PathTab from "$lib/components/Result/Tabs/PathTab.svelte";
    import ParcoursTab from "$lib/components/Result/Tabs/ParcoursTab.svelte";
    import Tabs from "$lib/components/Result/Tabs.svelte";
    import {goto} from "$app/navigation";
    import type {PageData} from './$types';
    import {paintings} from "$lib/stores/paintings";

    export let data: PageData;

    selectedSuspects.set([
        $paintings[0].suspects[0],
        $paintings[1].suspects[0],
        $paintings[2].suspects[0],
    ])

    if (!$selectedSuspects.length) {
        goto('/');
    }

    let laureates = {
        win: '&',
        highest: $parcours[data.highestID] || '?',
        lowest: $parcours[data.lowestId] || '?'
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

    let tabIndexSelected = 0;

    function handleTabChange(event) {
        tabIndexSelected = tabs.findIndex(tab => tab.id === event.detail.tab.id);
    }

    function goBackToHome() {
        goto('/')
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

        <section class="flex w-full justify-center gap-6 px-6">
            <PrimaryButton classList="w-full" handleClick={goBackToHome}>Retour au menu principal</PrimaryButton>
        </section>
    </section>

</section>