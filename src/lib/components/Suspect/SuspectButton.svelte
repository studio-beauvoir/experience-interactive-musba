<script lang="ts">
    export let suspect;
    export let handleClick;

    $: buttonStyle = `left: ${suspect.button.x}%; bottom: ${suspect.button.y}%;`;
    $: imageStyle = `transform: rotateY(${suspect.button.rightSide ? '180' : '0'}deg)`;
</script>

<button class="absolute w-2/12 translate-y-1/2 -translate-x-1/2" on:click={handleClick} style={buttonStyle}>
    <img alt="Inspecter le suspect n°{suspect.name}" class="w-full h-auto"
         src="/assets/suspectBubble.svg"
         style={imageStyle}
    >
</button>
<button on:click={handleClick} class="absolute aspect-painting w-[20%] -translate-x-1/2 translate-y-1/2" style="bottom: {suspect.zoom.y}%; left: {suspect.zoom.x}%" title="Inspecter le suspect n°{suspect.name}"></button>
