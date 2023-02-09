<script>
    export let laureates;
</script>

<section class="flex flex-col gap-16 justify-between w-full text-white">
    <article class="grid grid-cols-3 gap-4 items-center">
        <p class="col-span-2 text-label">
            Le parcours <span class="uppercase">{laureates.win}</span> est considéré comme le meilleur parcours car il
            est
            composé des 3
            complices
            de la
            voleuse !
        </p>
        <div class="relative">
            <p class="text-display uppercase absolute -top-3 left-1/2 -translate-x-1/2">{laureates.win}</p>
            <img alt=" " src="/assets/laureate-win.svg">
        </div>
    </article>

    <article class="grid grid-cols-3 gap-4 items-center">
        <div class="relative">
            <p class="text-display uppercase absolute -top-3 left-1/2 -translate-x-1/2">{laureates.highest}</p>
            <img src="/assets/laureate-highest.svg">
        </div>
        <p alt=" " class="col-span-2 text-label">
            Le parcours <span class="uppercase">{laureates.highest}</span> est celui qui est le plus emprunté !
        </p>
    </article>

    <article class="grid grid-cols-3 gap-4 items-center">
        <p class="col-span-2 text-label">
            Le parcours <span class="uppercase">{laureates.lowest}</span> est celui qui est le moins emprunté ! Il est
            très rare !
        </p>
        <div class="relative">
            <p class="text-display uppercase absolute -top-3 left-1/2 -translate-x-1/2">{laureates.lowest}</p>
            <img alt=" " src="/assets/laureate-lowest.svg">
        </div>
    </article>
</section>