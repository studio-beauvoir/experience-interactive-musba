<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import {goto} from "$app/navigation";

    function backToHome() {
        goto('/')
    }
</script>

<div class="flex flex-col items-center justify-center h-full bg-black text-white gap-4">
    <h1 class="text-yellow text-h1">Crédits</h1>
    <div class="flex items-center">
        <img src="/images/logo-studio-beauvoir.png" alt="Logotype du groupe à l'origine du projet, nommé Studio Beauvoir">
        <p class="flex text-center text-label">Coquard-Misono Leïly<br>Proust Arthaud<br>Wegera Quentin<br>Nago Jason<br>Lust Maxime</p>
    </div>
    <p class="text-center px-4 text-p">Texte de remerciement et tout. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div class="flex">
        <img src="/images/logo-mmi-bordeaux.png" alt="Logotype de la fillière MMI de l'IUT Bordeaux Montaigne">
        <img src="/images/logo-musba-bordeaux.png" alt="Logotype du Musée des Beaux-Arts de Bordeaux">
    </div>
    <Button handleClick={backToHome}>Retour</Button>
</div>