<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import SuspectButton from "$lib/components/SuspectButton.svelte";

    export let painting;

    let inspectingSuspect = null;

    const dispatch = createEventDispatcher();

    $:inspectingSuspectStyle = inspectingSuspect ? `transform: scale(4) translate(${13 - inspectingSuspect.position.x}%, ${-13 + inspectingSuspect.position.y}%);` : ''

    function dispatchSuspectSelected() {
        dispatch('suspect-selected', {
            suspect: inspectingSuspect
        });

        inspectingSuspect = null;
    }

    function inspectSuspect(suspect: string) {
        inspectingSuspect = suspect
    }

    function cancelSuspectInspection() {
        inspectingSuspect = null;
    }
</script>

<section class="flex flex-col h-full">
    <section class="relative w-full h-full overflow-hidden">
        <img alt="{painting.name}" class="h-full w-full object-cover object-bottom origin-bottom-left"
             src="{painting.image}"
             style="{inspectingSuspectStyle}"
        >
        {#if inspectingSuspect}
            <button on:click={cancelSuspectInspection} class="absolute text-cta px-4 py-2 decoration top-6 left-4">
                Changer de coupable
            </button>
        {:else}
            {#each painting.suspects as suspect}
                <SuspectButton suspect={suspect} handleClick={()=>inspectSuspect(suspect)}/>
            {/each}
        {/if}
    </section>
    <section class="h-44 px-6">
        {#if inspectingSuspect}
            <article class="py-4">
                <p>{inspectingSuspect.text}</p>
                <button on:click={dispatchSuspectSelected} class="flex flex-row gap-2 items-center">
                    <span>Confirmer</span>
                    <span class="decoration rounded-full">></span>
                </button>
            </article>
        {:else}
            <article class="py-4">
                <p class="text-p">Je me demande qui c’est ... vous auriez une idée ?</p>
                <p class="text-label text-yellow">Interrogez un suspect en cliquant dessus</p>
            </article>
        {/if}
    </section>
</section>