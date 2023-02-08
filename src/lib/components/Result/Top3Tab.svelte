<script>
    import {parcours} from "$lib/stores/parcours.ts";

    let laureateWin = '&';
    let laureateHighest = '?';
    let laureateLowest = '?';

    getStatsFromDatabase();

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

        laureateHighest = $parcours[highestID];
        laureateLowest = $parcours[lowestId];
    }
</script>

<section class="flex flex-col gap-16 justify-between w-full px-6 text-white">
    <article class="grid grid-cols-3 gap-4 items-center">
        <p class="col-span-2 text-label">
            Le parcours <span class="uppercase">{laureateWin}</span> est considéré comme le meilleur parcours car il est
            composé des 3
            complices
            de la
            voleuse !
        </p>
        <div class="relative">
            <p class="text-display uppercase absolute -top-3 left-1/2 -translate-x-1/2">{laureateWin}</p>
            <img alt=" " src="/assets/laureate-win.svg">
        </div>
    </article>

    <article class="grid grid-cols-3 gap-4 items-center">
        <div class="relative">
            <p class="text-display uppercase absolute -top-3 left-1/2 -translate-x-1/2">{laureateHighest}</p>
            <img src="/assets/laureate-highest.svg">
        </div>
        <p alt=" " class="col-span-2 text-label">
            Le parcours <span class="uppercase">{laureateHighest}</span> est celui qui est le plus emprunté !
        </p>
    </article>

    <article class="grid grid-cols-3 gap-4 items-center">
        <p class="col-span-2 text-label">
            Le parcours <span class="uppercase">{laureateLowest}</span> est celui qui est le moins emprunté ! Il est
            très rare !
        </p>
        <div class="relative">
            <p class="text-display uppercase absolute -top-3 left-1/2 -translate-x-1/2">{laureateLowest}</p>
            <img alt=" " src="/assets/laureate-lowest.svg">
        </div>
    </article>
</section>