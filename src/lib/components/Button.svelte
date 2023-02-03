<script>
    export let handleClick;
</script>

<button class="py-4 px-6 bg-black text-white border border-yellow" on:click={handleClick}>
    <slot></slot>
</button>