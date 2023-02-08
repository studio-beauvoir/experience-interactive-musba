<script>
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import ComicStrip from "$lib/components/ComicStrip.svelte";
</script>

<section class="flex flex-col gap-16 justify-between w-full px-6">
    <ComicStrip filename="start" title="La fameuse serviette disparue"/>
    {#each $selectedSuspects as suspect}
        <ComicStrip filename={suspect.id} title={suspect.comicTitle}/>
    {/each}
    <ComicStrip filename="end" title="Le vol de la serviette, enfin élucidé"/>
</section>