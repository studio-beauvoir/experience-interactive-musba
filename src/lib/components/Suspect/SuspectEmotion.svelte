<script lang="ts">
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

    export let suspect;
    export let handleClick;

    $:widthInPercent = suspect.emotion.width;
    $: size = document.body.offsetWidth*widthInPercent/100;
    $: gifStyle = `height: ${size}px; width: ${size}px`;
</script>

<button on:click={handleClick} class="absolute translate-y-1/2 -translate-x-1/2" style="left: {suspect.emotion.x}%; bottom: {suspect.emotion.y}%;">
    <img src="/emotions/{suspect.id}.gif" class="max-w-none" style={gifStyle}/>
<!--    <LottiePlayer-->
<!--            src="/lotties/{suspect.id}.json"-->
<!--            autoplay="{true}"-->
<!--            loop="{true}"-->
<!--            controls="{false}"-->
<!--            renderer="svg"-->
<!--            controlsLayout="{[]}"-->
<!--            background="transparent"-->
<!--            height="{document.body.offsetWidth*widthInPercent/100}"-->
<!--            width="{document.body.offsetWidth*widthInPercent/100}"-->
<!--    />-->
</button>