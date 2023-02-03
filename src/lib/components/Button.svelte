<script>
    export let handleClick;
</script>

<button class="w-32 h-12 bg-black text-white border border-yellow" on:click={handleClick}>
    <slot></slot>
</button>