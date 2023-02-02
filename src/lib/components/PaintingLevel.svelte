<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import {goto} from "$app/navigation";
    import {createEventDispatcher} from 'svelte';

    export let painting;

    let inspectingSuspect = null;

    const dispatch = createEventDispatcher();

    function dispatchSuspectSelected() {
        dispatch('suspect-selected', {
            suspect: inspectingSuspect
        });

        inspectingSuspect = null;
    }

    function inspectSuspect(suspect: string) {
        inspectingSuspect = suspect
    }
</script>

<section class="bg-red">
    {#if inspectingSuspect}
        <div>{inspectingSuspect.text}</div>
        <!-- <div>{inspectingSuspect.button}</div> -->
        <Button handleClick={dispatchSuspectSelected}>Confirmer</Button>
    {:else}
        <section class="w-full aspect-square relative overflow-auto">
            <img alt="{painting.name}" class="mx-auto h-full w-auto max-w-none" src="{painting.image}">
        </section>
        <article>
            <h2 class="text-2xl">Qui est le suspect?</h2>
        </article>
        <section class="flex flex-col">
            {#each painting.suspects as suspect}
                <Button handleClick={()=>inspectSuspect(suspect)}>{ suspect.name }</Button>
            {/each}
        </section>
    {/if}
</section>