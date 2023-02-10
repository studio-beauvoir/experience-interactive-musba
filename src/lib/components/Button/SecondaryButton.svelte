<script>
    export let handleClick;
    export let classList = "";
</script>

<button class="text-cta px-4 py-2 text-white border border-brown {classList}" on:click={handleClick}>
    <slot></slot>
</button>