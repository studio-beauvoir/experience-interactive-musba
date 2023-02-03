<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import {goto} from "$app/navigation";

    function backToHome() {
        goto('/')
    }
</script>

<div class="flex flex-col items-center justify-center h-full bg-black text-white">
    <h1 class="text-h1 text-yellow">Crédits</h1>
    <p class="flex text-center">Coquard-Misono Leïly<br>Proust Arthaud<br>Wegera Quentin<br>Nago Jason<br>Lust Maxime</p>
    <Button handleClick={backToHome}>Retour</Button>
</div>