<script>
    export let handleClick;
    export let classList;
</script>

<button class="decoration text-cta px-10 py-2 text-white {classList}" on:click={handleClick}>
    <slot></slot>
</button>