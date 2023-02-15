<script lang="ts">
    import type {Suspect, SuspectType} from "$lib/types/suspect";

    export let suspect: Suspect;

    function getTraducedSuspectType(suspect): string {
        const trad: { [type: SuspectType]: string } = {
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