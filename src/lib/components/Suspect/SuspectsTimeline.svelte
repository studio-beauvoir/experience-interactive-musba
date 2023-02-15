<script lang="ts">
    import SuspectsTimelineSuspect from "$lib/components/Suspect/SuspectsTimelineSuspect.svelte";
    import SuspectsTimelineSuspectDetailed from "$lib/components/Suspect/SuspectsTimelineSuspectDetailed.svelte";
    import type {Suspects} from "$lib/types/suspect";

    export let suspects: Suspects;
    export let detailed = false;
    export let classList = "";
</script>

<section class="pointer-events-none flex items-center w-full justify-center mb-8 {classList}">
    {#if detailed}
        <SuspectsTimelineSuspectDetailed suspect={suspects[1]}/>
    {:else}
        <SuspectsTimelineSuspect suspect={suspects[1]}/>
    {/if}

    <div class="w-4 h-px border-t-2 border-yellow"></div>

    {#if detailed}
        <SuspectsTimelineSuspectDetailed suspect={suspects[2]}/>
    {:else}
        <SuspectsTimelineSuspect suspect={suspects[2]}/>
    {/if}

    <div class="w-4 h-px border-t-2 border-yellow"></div>

    {#if detailed}
        <SuspectsTimelineSuspectDetailed suspect={suspects[3]}/>
    {:else}
        <SuspectsTimelineSuspect suspect={suspects[3]}/>
    {/if}
</section>