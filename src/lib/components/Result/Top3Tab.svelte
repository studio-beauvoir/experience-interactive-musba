<script>

    let laureateWin = '&';
    let laureateHighest = 'D';
    let laureateLowest = 'E';
</script>

<section class="flex flex-col gap-16 justify-between w-full px-6 text-white">
    <article class="grid grid-cols-3 gap-4 items-center">
        <p class="col-span-2 text-label">
            Le parcours & est considéré comme le meilleur parcours car il est composé des 3
            complices
            de la
            voleuse !
        </p>
        <div class="relative">
            <p class="text-display absolute -top-2 left-1/2 -translate-x-1/2">{laureateWin}</p>
            <img alt=" " src="/assets/laureate-win.svg">
        </div>
    </article>

    <article class="grid grid-cols-3 gap-4 items-center">
        <div class="relative">
            <p class="text-display absolute -top-2 left-1/2 -translate-x-1/2">{laureateHighest}</p>
            <img src="/assets/laureate-highest.svg">
        </div>
        <p alt=" " class="col-span-2 text-label">
            Le parcours F est celui qui est le plus emprunté !
        </p>
    </article>

    <article class="grid grid-cols-3 gap-4 items-center">
        <p class="col-span-2 text-label">
            Le parcours P est celui qui est le moins emprunté ! Il est très rare !
        </p>
        <div class="relative">
            <p class="text-display absolute -top-2 left-1/2 -translate-x-1/2">{laureateLowest}</p>
            <img alt=" " src="/assets/laureate-lowest.svg">
        </div>
    </article>
</section>