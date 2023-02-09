<script>
    export let handleClick;
    export let classList;
</script>

<button class="flex mt-auto ml-auto flex-row align-center items-center gap-3 {classList}"
        on:click={handleClick}>
    <span class="text-p">
        <slot></slot>
    </span>
    <span class="rounded-full decoration-rounded w-8 h-8 p-1">&#x2192</span>
</button>