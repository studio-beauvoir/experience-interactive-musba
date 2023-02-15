<script lang="ts">
    import type {Suspect} from "$lib/types/suspect";

    export let suspect: Suspect;
</script>

<article class="aspect-square h-10 bg-black border-2 border-yellow rounded-full flex flex-col">
    {#if suspect}
        <img alt=" "
             class="rounded-full"
             src="/images/figures/{suspect.id}.jpg">
    {/if}
</article>