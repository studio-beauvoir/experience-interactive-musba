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
    <section class="relative w-full flex-grow overflow-hidden">
        <section class="absolute bottom-0 h-min w-full">
            <img alt="{painting.name}" class="relative bottom-0 h-auto w-full object-bottom origin-bottom-left"
                 src="{painting.image}"
                 style="{inspectingSuspectStyle}"
            >
            {#if !inspectingSuspect}
                {#each painting.suspects as suspect}
                    <SuspectButton suspect={suspect} handleClick={()=>inspectSuspect(suspect)}/>
                {/each}
            {/if}
        </section>
        {#if inspectingSuspect}
            <button on:click={cancelSuspectInspection}
                    class="absolute text-cta px-4 py-2 decoration top-6 left-4 bg-black/20">
                Changer de coupable
            </button>
        {/if}
    </section>
    <section class="relative h-44 w-full p-6 border-t border-yellow">
        {#if inspectingSuspect}
            <img class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
                 src="/images/figures/{inspectingSuspect.id}.jpg">
            <article class="flex flex-col h-full">
                <p class="mr-16">{inspectingSuspect.text}</p>
                <button on:click={dispatchSuspectSelected}
                        class="flex mt-auto ml-auto flex-row align-center items-center gap-3">
                    <span class="text-p h-full align-center text-white justify-self-start">Continuer</span>
                    <span class="decoration-rounded w-8 h-8 rounded-full text-white p-1">&#x2192</span>
                </button>
            </article>
        {:else}
            <img class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
                 src="/images/figures/statue.jpg">
            <article class="flex flex-col h-full">
                <p class="text-p mr-16">Je me demande qui c’est ... vous auriez une idée ?</p>
                <p class="text-label text-yellow">Interrogez un suspect en cliquant dessus</p>
            </article>
        {/if}
    </section>
</section>