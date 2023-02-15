<script lang="ts">
    import ComicStrip from "$lib/components/Comic/ComicStrip.svelte";
    import type {Suspects} from "$lib/types/suspect";

    export let suspects: Suspects;
    // let suspectsSortedValues: Suspect[];
    // $: {
    //     suspectsSortedValues = Object.values(suspects);
    //     suspectsSortedValues.sort((a, b) => parseInt(a.id[0]) - parseInt(b.id[0]))
    // }
</script>

<section class="flex flex-col gap-16 justify-between w-full">
    <ComicStrip filename="start" title="La fameuse serviette disparue"/>
    <ComicStrip filename={suspects[1].id} title={suspects[1].comicTitle}/>
    <ComicStrip filename={suspects[2].id} title={suspects[2].comicTitle}/>
    <ComicStrip filename={suspects[3].id} title={suspects[3].comicTitle}/>
    <ComicStrip filename="end" title="Le vol de la serviette, enfin élucidé"/>
</section>