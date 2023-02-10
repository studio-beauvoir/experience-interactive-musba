<script lang="ts">
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

    export let position;
    export let suspect;
    export let handleClick;

    const widthInPercent = 28;
</script>

<button on:click={handleClick} class="absolute translate-y-1/2 -translate-x-1/2" style="left: {position.x}%; bottom: {position.y}%;">
    <LottiePlayer
            src="/lotties/{suspect.id}.json"
            autoplay="{true}"
            loop="{true}"
            controls="{false}"
            renderer="svg"
            controlsLayout="{[]}"
            background="transparent"
            height="{document.body.offsetWidth*widthInPercent/100}"
            width="{document.body.offsetWidth*widthInPercent/100}"
    />
</button>