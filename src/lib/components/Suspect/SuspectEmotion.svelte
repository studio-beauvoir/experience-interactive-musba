<script lang="ts">
    import type {Suspect} from "$lib/types/suspect";

    export let suspect: Suspect;

    $: widthInPercent = suspect.emotion.width;
    $: size = document.body.offsetWidth * widthInPercent / 100;
    $: gifStyle = `height: ${size}px; width: ${size}px`;
    $: emotionStyle = `left: ${suspect.emotion.x}%; bottom: ${suspect.emotion.y}%;`;
</script>

<div class="absolute translate-y-1/2 -translate-x-1/2" style={emotionStyle}>
    <img alt=" " class="max-w-none" src="/emotions/{suspect.id}.gif" style={gifStyle}/>
</div>