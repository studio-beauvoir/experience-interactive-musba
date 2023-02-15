<script lang="ts">
    import {goto} from "$app/navigation";
    import DialogButton from "$lib/components/Button/DialogButton.svelte";

    function startGame() {
        goto('/game/step/1')
    }
</script>

<section class="flex flex-col items-center justify-center h-full bg-black overflow-hidden">
    <section class="relative flex-grow w-full overflow-hidden">
        <picture>
            <source srcset="/images/femme-nue-derriere.webp" type="image/webp">
            <img alt="Sculpture vue de derrière nommée Femme nue au bord de l'eau"
                 class="absolute w-full h-full object-cover"
                 src="/images/femme-nue-derriere.png">
        </picture>
    </section>

    <section class="relative h-44 w-full p-6 border-t border-yellow">
        <img alt=" "
             class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
             src="/images/figures/statue.jpg">

        <article class="flex flex-col h-full">
            <p class="text-p text-white flex-grow mr-16">
                Une personne malveillante vient de voler ma serviette... Il me semble avoir vu 3 complices en tout&nbsp;!
            </p>

            <DialogButton handleClick={startGame}>Continuer</DialogButton>
        </article>
    </section>
</section>