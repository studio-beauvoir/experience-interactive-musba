<script lang="ts">
    export let suspect;
    export let handleClick;
</script>

<button on:click={handleClick} class="absolute border-2 border-black rounded-full h-20 w-20 -translate-y-1/2 -translate-x-1/2" style="left: {suspect.position.x}%; top: {suspect.position.y}%;">
</button>