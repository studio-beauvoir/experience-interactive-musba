<script>
    export let handleClick;
</script>

<button class="decoration w-24 h-12 text-white" on:click={handleClick}>
    <slot></slot>
</button>