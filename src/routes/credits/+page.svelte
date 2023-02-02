<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import {goto} from "$app/navigation";

    function backToHome() {
        goto('/')
    }
</script>

<div class="flex flex-col items-center justify-center h-full">
    <h1 class="text-pink-500 font-bold text-3xl">Crédits</h1>
    <p class="flex text-center">Leilo, arthaud...</p>
    <Button handleClick={backToHome}>Retour</Button>
</div>