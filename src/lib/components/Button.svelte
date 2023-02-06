<script>
    export let handleClick;
</script>

<button class="decoration text-cta px-10 py-4 text-white" on:click={handleClick}>
    <slot></slot>
</button>