<script>
    import {ArrowRight} from "radix-icons-svelte";

    export let handleClick;
    export let classList = "";
    export let percyId = "";
</script>

<button class="flex mt-auto ml-auto flex-row align-center items-center gap-3 text-white {classList}"
        data-percy={percyId}
        on:click={handleClick}>
    <span class="text-label-2 text-yellow">
        <slot></slot>
    </span>
    <span class="rounded-full decoration-rounded w-8 h-8 p-1.5 flex justify-center items-center">
        <ArrowRight class="h-full w-full"/>
    </span>
</button>