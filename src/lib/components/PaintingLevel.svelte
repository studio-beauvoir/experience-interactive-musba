<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import {createEventDispatcher} from 'svelte';

    export let painting;

    const dispatch = createEventDispatcher();

    function addSuspect(suspect) {
        dispatch('suspect-selected', {
            suspect
        });
    }
</script>

<section class="bg-red">
    <section class="w-full aspect-square relative overflow-auto">
        <img alt="{painting.name}" class="mx-auto h-full w-auto max-w-none" src="{painting.image}">
    </section>
    <article>
        <h2 class="text-2xl">Qui est le suspect?</h2>
    </article>
    <section class="flex flex-col">
        {#each painting.suspects as suspect}
            <Button handleClick={()=>addSuspect(suspect)}>{ suspect }</Button>
        {/each}
    </section>

</section>