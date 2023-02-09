<script>
    export let handleClick;
    export let classList;
</script>

<button class="text-yellow flex flex-row align-center items-center gap-3 {classList}"
        on:click={handleClick}>
    <slot></slot>
</button>