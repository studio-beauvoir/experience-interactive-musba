<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import {parcours} from "$lib/stores/parcours";
    import {goto} from "$app/navigation";

    if (!$selectedSuspects.length) {
        goto('/');
    }

    function getParcoursFromSuspectsSelected() {
        const parcoursId = $selectedSuspects.map(suspect => suspect.id).join('_');
        return $parcours[parcoursId];
        // const alphabet = "abcdefghijklmnopqrstuvwxyz&";

        // let txt = "";
        // let n = 0
        // for (let i = 1; i <= 3; i++) {
        //     for (let j = 1; j <= 3; j++) {
        //         for (let k = 1; k <= 3; k++) {
        //             txt += `"1-${i}_2-${j}_3-${k}": "${alphabet[n]}",\n`
        //             n++;
        //         }
        //     }
        // }
        // console.log(txt)
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

    function goBackToHome() {
        goto('/')
    }

    function goToCredits() {
        goto('/credits')
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

    saveResultsToDatabase()
</script>

<section
        class="z-0 relative flex flex-col items-center justify-center h-full bg-black text-yellow gap-10 overflow-hidden">
    <div class="-z-10 absolute bg-brown h-px w-[200vw] origin-center top-32 left-16 rotate-[32deg]"></div>
    <div class="-z-10 absolute bg-brown h-px w-[200vw] origin-center top-44 left-16 rotate-[32deg]"></div>
    <div class="-z-10 absolute bg-brown h-px w-[200vw] origin-center bottom-60 -rotate-12"></div>
    <div class="-z-10 absolute bg-brown h-px w-[200vw] origin-center bottom-44 right-16 rotate-[32deg]"></div>

    <img class="absolute z-0 top-0 right-0" src="/assets/lines-svg.svg" alt="">
    <article class="flex flex-col px-6 z-10">
        <h2 class="text-h2">Mystère</h2>
        <h1 class="text-display ml-10">Résolu !</h1>
    </article>

    <p class="text-p text-center px-6">Vous avez eu une piste<br> bien intéressante !</p>

    <article class="w-full flex gap-6 items-center">
        <section class="flex flex-col gap-2 w-full">
            <div class="bg-brown h-px"></div>
            <div class="bg-brown h-px mr-3"></div>
            <div class="bg-brown h-px"></div>
        </section>

        <section class="text-center">
            <p class="text-label">Parcours</p>
            <p class="text-h1 uppercase">{getParcoursFromSuspectsSelected()}</p>
        </section>

        <section class="flex flex-col gap-2 w-full">
            <div class="bg-brown h-px"></div>
            <div class="bg-brown h-px ml-3"></div>
            <div class="bg-brown h-px"></div>
        </section>
    </article>

    <ol class="flex gap-4 justify-between w-full px-6">
        {#each $selectedSuspects as suspect}
            <li class="flex flex-col gap-2 items-center">
                <img alt=" "
                     class="aspect-square border border-yellow"
                     src="/images/figures/{suspect.id}.jpg">
                <span class="text-label text-white">
                    {getTraducedSuspectType(suspect)}
                </span>
            </li>
        {/each}
    </ol>

    <section class="flex w-full justify-center gap-6 px-6">
        <Button classList="w-full" handleClick={goToCredits}>Crédits</Button>
        <Button classList="w-full" handleClick={goBackToHome}>Rejouer</Button>
    </section>

</section>