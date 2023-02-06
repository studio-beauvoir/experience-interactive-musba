<script lang="ts">
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

    export let position;
    export let file

    const widthInPercent = 28;

    console.log(document.body.offsetWidth*widthInPercent/100)
</script>

<div class="absolute translate-y-1/2 -translate-x-1/2 pointer-events-none" style="left: {position.x}%; bottom: {position.y}%;">
    <LottiePlayer
            src="{file}"
            autoplay="{true}"
            loop="{true}"
            controls="{false}"
            renderer="svg"
            background="transparent"
            height="{document.body.offsetWidth*widthInPercent/100}"
            width="{document.body.offsetWidth*widthInPercent/100}"
    />
</div>