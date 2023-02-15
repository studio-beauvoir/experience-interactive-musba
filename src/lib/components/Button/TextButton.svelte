<script>
    export let handleClick;
    export let classList = "";
    export let percyId = "";
</script>

<button class="text-yellow flex flex-row align-center items-center gap-3 {classList}"
        data-percy={percyId}
        on:click={handleClick}>
    <slot></slot>
</button>