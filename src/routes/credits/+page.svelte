<script lang="ts">
    import PrimaryButton from "$lib/components/Button/PrimaryButton.svelte";
    import {goto} from "$app/navigation";

    function backToHome() {
        goto('/')
    }

    function goToSources() {
        goto('/credits/sources')
    }
</script>

<img alt="" class="absolute z-0 top-0 right-0" src="/assets/lines-svg.svg">
<section class="relative z-10 flex flex-col items-center justify-center h-full text-white gap-3">
    <h1 class="text-yellow text-display mb-6">Crédits</h1>
    <section class="flex flex-col items-center text-center text-h2 gap-4">
        <div class="gap-4">
            <p><a class="underline" href="https://arthaudproust.fr" rel="noreferrer" target="_blank">Arthaud Proust
            </a></p>
            <p class="text-label text-yellow">Développement</p>
        </div>
        <div>
            <p><a class="underline" href="https://www.linkedin.com/in/jason-nago-59824a182/" rel="noreferrer"
                  target="_blank">
                Jason Nago</a></p>
            <p class="text-label text-yellow">UI/UX Design - Game Design - Motion Design</p>
        </div>
        <div>
            <p><a class="underline" href="https://www.linkedin.com/in/le%C3%AFly-coquard-misono-83a0b4223/"
                  rel="noreferrer" target="_blank">Leïly Coquard-Misono</a></p>
            <p class="text-label text-yellow">DA - UI/UX Design - Illustrations - Animations</p>
        </div>
        <div>
            <p><a class="underline" href="https://maximelust.fr/" rel="noreferrer" target="_blank">Maxime
                Lust
            </a></p>
            <p class="text-label text-yellow">Développement</p>
        </div>
        <div>
            <p><a class="underline" href="https://www.linkedin.com/in/quentin-wegera-a11443224/" rel="noreferrer"
                  target="_blank">
                Quentin Wegera</a></p>
            <p class="text-label text-yellow">UX Design - Rédaction - Print</p>
        </div>
    </section>
    <section class="flex justify-center w-1/3">
        <!-- <img class="" alt="Logotype de la fillière MMI de l'IUT Bordeaux Montaigne" src="/images/logo-mmi-bordeaux.png">
        <img alt="Logotype du Musée des Beaux-Arts de Bordeaux" src="/images/logo-musba-bordeaux.png"> -->
        <img alt="Logotype du groupe à l'origine du projet, nommé Studio Beauvoir"
             src="/images/logo-studio-beauvoir.png">
    </section>
    <div class="flex gap-6">
        <PrimaryButton handleClick={backToHome} soundId={"reverse"}>Retour</PrimaryButton>
        <PrimaryButton handleClick={goToSources}>Sources</PrimaryButton>
    </div>
</section>