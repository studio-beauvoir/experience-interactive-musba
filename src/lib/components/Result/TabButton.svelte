<script>
    import {createEventDispatcher} from "svelte";

    export let selected;
    export let tab;

    const dispatch = createEventDispatcher();

    function dispatchTabChange() {
        dispatch('tab-change', {
            tab
        });
    }
</script>

<div class="relative h-12 flex items-center">
    {#if selected}
    <span class="w-full  absolute z-10 bg-black p-1 rounded-full aspect-square border border-yellow">
        <span class="flex whitespace-nowrap text-center items-center justify-center text-h2 px-2 w-full rounded-full aspect-square border border-yellow">
            {tab.label}
        </span>
    </span>
    {:else }
        <button class="w-full" on:click={dispatchTabChange}>
            {tab.label}
        </button>
    {/if}
</div>
