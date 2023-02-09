<script>
    export let suspect;

    function getTraducedSuspectType(suspect) {
        const trad = {
            innocent: "Innocent",
            witness: "Témoin",
            accomplice: "Complice"
        }

        return trad[suspect.type];
    }
</script>
<article class="relative h-full bg-black rounded-full">
    {#if suspect}
        <img alt=" "
             class="h-20 border-2 border-yellow rounded-full"
             src="/images/figures/{suspect.id}.jpg">
        <p class="absolute -bottom-8 w-full text-label text-center">{getTraducedSuspectType(suspect)}</p>
    {/if}
</article>