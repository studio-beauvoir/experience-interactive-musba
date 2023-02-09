<script lang="ts">
    import PrimaryButton from "$lib/components/Button/PrimaryButton.svelte";
    import {goto} from "$app/navigation";

    function backToHome() {
        goto('/')
    }
</script>

<div class="flex flex-col items-center justify-center h-full bg-black text-white gap-4">
    <img alt="" class="absolute z-0 top-0 right-0" src="/assets/lines-svg.svg">
    <h1 class="text-yellow text-h1">Crédits</h1>
    <div class="flex items-center">
        <img alt="Logotype du groupe à l'origine du projet, nommé Studio Beauvoir"
             src="/images/logo-studio-beauvoir.png">
        <p class="flex text-center text-label">Coquard-Misono Leïly<br>Proust Arthaud<br>Wegera Quentin<br>Nago
            Jason<br>Lust Maxime</p>
    </div>
    <p class="text-center px-4 text-p">Texte de remerciement et tout. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.</p>
    <div class="flex">
        <img alt="Logotype de la fillière MMI de l'IUT Bordeaux Montaigne" src="/images/logo-mmi-bordeaux.png">
        <img alt="Logotype du Musée des Beaux-Arts de Bordeaux" src="/images/logo-musba-bordeaux.png">
    </div>
    <PrimaryButton handleClick={backToHome}>Retour</PrimaryButton>
</div>