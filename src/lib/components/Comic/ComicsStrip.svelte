<script lang="ts">
    import type {Suspects} from "$lib/types/suspect";
    import ComicStrip from "$lib/components/Comic/ComicStrip.svelte";

    export let suspects: Suspects;

    $: comics = [
        {filename: 'start', title: 'La fameuse serviette disparue'},
        {filename: suspects[1].id, title: suspects[1].comicTitle},
        {filename: suspects[2].id, title: suspects[2].comicTitle},
        {filename: suspects[3].id, title: suspects[3].comicTitle},
        {filename: 'end', title: 'Le vol de la serviette, enfin élucidé'},
    ];
</script>

<ul class="flex flex-row gap-2 px-6 pb-6 relative justify-between overflow-x-auto snap-x snap-mandatory">
    {#each comics as comic}
        <li class="basis-full shrink-0 grow-0 snap-center">
            <ComicStrip {...comic}/>
        </li>
    {/each}
</ul>