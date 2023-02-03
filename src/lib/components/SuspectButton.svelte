<script lang="ts">
    export let suspect;
    export let handleClick;
</script>

<button on:click={handleClick} class="absolute border-2 border-yellow aspect-square rounded-full w-3/12 translate-y-1/2 -translate-x-1/2" style="left: {suspect.position.x}%; bottom: {suspect.position.y}%;">
</button>