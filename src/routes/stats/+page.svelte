<script lang="ts">
    import type {PageData} from "./$types";

    export let data: PageData;

</script>
<section class="flex flex-col px-2 py-10">
    <h1>Statistiques</h1>
    <section class="grid grid-cols-3">
        {#each data.statsCounts as statCount}
            <article class="flex flex-col items-center">
                <h3>{statCount._id.selectedSuspects}</h3>
                <p>{statCount.total}</p>
            </article>
        {/each}
    </section>
</section>