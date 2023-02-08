<script>
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
</script>

{#if $selectedSuspects.length }
    <section class="pointer-events-none absolute z-10 flex items-center w-full justify-center top-4">
        <article class="h-10 w-10 bg-black border-2 border-yellow rounded-full">
            {#if $selectedSuspects[0]}
                <img alt=" "
                     class="rounded-full"
                     src="/images/figures/{$selectedSuspects[0].id}.jpg">
            {/if}
        </article>

        <div class="w-4 h-px border-t-2 border-yellow"></div>

        <article class="h-10 w-10 bg-black border-2 border-yellow rounded-full">
            {#if $selectedSuspects[1]}
                <img alt=" "
                     class="rounded-full"
                     src="/images/figures/{$selectedSuspects[1].id}.jpg">
            {/if}
        </article>

        <div class="w-4 h-px border-t-2 border-yellow"></div>

        <article class="h-10 w-10 bg-black border-2 border-yellow rounded-full">
            {#if $selectedSuspects[2]}
                <img alt=" "
                     class="rounded-full"
                     src="/images/figures/{$selectedSuspects[2].id}.jpg">
            {/if}
        </article>
    </section>
{/if}