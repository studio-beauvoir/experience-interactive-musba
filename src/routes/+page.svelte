<script>
    import Button from "../lib/components/Button.svelte";
    import {goto} from "$app/navigation";

    function startGame() {
        goto('/game')
    }
</script>

<div class="flex flex-col items-center justify-center h-full">
    <h1 class="text-pink-500 font-bold text-3xl">This is a tailwind test</h1>
    <Button handleClick={startGame}>Commencer</Button>
</div>