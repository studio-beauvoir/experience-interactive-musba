<script>
    export let handleClick;
</script>

<button class="py-4 px-6 bg-gray-300" on:click={handleClick}>
    <slot></slot>
</button>