<script>
    export let handleClick;
    export let classList;
</script>

<button class="decoration text-cta px-10 py-3 text-white {classList}" on:click={handleClick}>
    <slot></slot>
</button>