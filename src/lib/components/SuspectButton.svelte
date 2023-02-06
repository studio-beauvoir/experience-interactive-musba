<script lang="ts">
    export let suspect;
    export let handleClick;
</script>

<button on:click={handleClick} class="absolute w-2/12 translate-y-1/2 -translate-x-1/2" style="left: {suspect.button.x}%; bottom: {suspect.button.y}%;">
    <img class="w-full h-auto" style="transform: rotateY({suspect.button.rightSide ? '180' : '0'}deg)"
        src="/assets/suspectBubble.svg"
        alt="Inspecter le suspect n°{suspect.name}"
    >
</button>