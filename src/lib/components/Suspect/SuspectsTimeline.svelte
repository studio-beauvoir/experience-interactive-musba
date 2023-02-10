<script>
    import SuspectsTimelineSuspect from "$lib/components/Suspect/SuspectsTimelineSuspect.svelte";
    import SuspectsTimelineSuspectDetailed from "$lib/components/Suspect/SuspectsTimelineSuspectDetailed.svelte";

    export let suspects;
    export let detailed = false;
    export let classList = "";
</script>

<section class="pointer-events-none flex items-center w-full justify-center mb-8 {classList}">
    {#if detailed}
        <SuspectsTimelineSuspectDetailed suspect={suspects[0]}/>
    {:else}
        <SuspectsTimelineSuspect suspect={suspects[0]}/>
    {/if}

    <div class="w-4 h-px border-t-2 border-yellow"></div>

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
</section>