<script>
    export let handleClick;
    export let classList = "";
    export let soundId = 'validation';

    const sounds = {
        validation: new Audio("/audio/soundEffect/Button-Click-Validation.mp3"),
        reverse: new Audio("/audio/soundEffect/Button-Click-Reverse.mp3"),
    }

    function onClick() {
        handleClick();
        sounds[soundId].play();
        // sounds.click1.play()
    }
</script>

<button class="decoration text-cta px-10 py-2 text-white {classList}" on:click={onClick}>
    <slot></slot>
</button> 