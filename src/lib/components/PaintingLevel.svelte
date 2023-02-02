<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import {createEventDispatcher} from 'svelte';
    import SuspectButton from "$lib/components/SuspectButton.svelte";

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

<section>
    {#if inspectingSuspect}
        <div>{inspectingSuspect.text}</div>
        <Button handleClick={dispatchSuspectSelected}>Confirmer</Button>
    {:else}
        <section class="w-full aspect-square relative overflow-auto">
            <div class="relative h-full w-min">
                <img alt="{painting.name}" class="mx-auto h-full w-auto max-w-none" src="{painting.image}">
                {#each painting.suspects as suspect}
                    <SuspectButton suspect={suspect} handleClick={()=>inspectSuspect(suspect)}/>
                {/each}
            </div>
        </section>
        <article>
            <h2 class="text-2xl">Qui est le suspect?</h2>
        </article>
    {/if}
</section>