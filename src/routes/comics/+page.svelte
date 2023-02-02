<script lang="ts">
    import type {PageData} from "./$types";

    export let data: PageData;

</script>
<h1>Select a car</h1>
<ul>
    {#each data.comics as comic}
        <li>
            <h3>{comic.username}</h3>
        </li>
    {/each}
</ul>