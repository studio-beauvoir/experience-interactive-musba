<script>
    export let suspects;
</script>

<section class="pointer-events-none absolute z-10 flex items-center w-full justify-center top-4">
    <article class="h-10 w-10 bg-black border-2 border-yellow rounded-full">
        {#if suspects[0]}
            <img alt=" "
                 class="rounded-full"
                 src="/images/figures/{suspects[0].id}.jpg">
        {/if}
    </article>

    <div class="w-4 h-px border-t-2 border-yellow"></div>

    <article class="h-10 w-10 bg-black border-2 border-yellow rounded-full">
        {#if suspects[1]}
            <img alt=" "
                 class="rounded-full"
                 src="/images/figures/{suspects[1].id}.jpg">
        {/if}
    </article>

    <div class="w-4 h-px border-t-2 border-yellow"></div>

    <article class="h-10 w-10 bg-black border-2 border-yellow rounded-full">
        {#if suspects[2]}
            <img alt=" "
                 class="rounded-full"
                 src="/images/figures/{suspects[2].id}.jpg">
        {/if}
    </article>
</section>