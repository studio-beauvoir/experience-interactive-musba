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

<div class="relative flex items-center bg-black">
    {#if selected}
        <span class="w-full bg-yellow border border-yellow text-black p-1">
            <span class="flex whitespace-nowrap text-center items-center justify-center text-h2 p-2 w-full border border-black">
                {tab.label}
            </span>
        </span>
    {:else }
        <button class="w-full border border-yellow p-1" on:click={dispatchTabChange}>
            <span class="flex whitespace-nowrap text-center items-center justify-center text-h2 p-2 w-full border border-yellow">
                {tab.label}
            </span>
        </button>
    {/if}
</div>
