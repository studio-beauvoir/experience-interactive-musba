<script>
    export let handleClick;
    export let classList = "";
    export let soundId = 'validation';
    export let percyId = "";

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
<button class="text-cta px-4 py-2 text-white border border-brown {classList}" data-percy={percyId} on:click={onClick}>
    <slot></slot>
</button>