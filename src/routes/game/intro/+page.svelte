<script lang="ts">
    import {goto} from "$app/navigation";

    function startGame() {
        goto('/game')
    }
</script>

<section class="flex flex-col items-center justify-center h-full bg-black overflow-hidden">
    <section class="relative flex-grow w-full overflow-hidden">
        <img alt="Sculpture vue de derrière nommée Femme nue au bord de l'eau"
             class="absolute w-full h-full object-cover"
             src="/images/femme-nue-derriere.webp">
    </section>

    <section class="relative h-44 w-full p-6 border-t border-yellow">
        <img alt=" "
             class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
             src="/images/figures/statue.jpg">

        <article class="flex flex-col h-full">
            <p class="text-p text-white flex-grow mr-16">Une personne malveillante vient de voler ma serviette...</p>

            <button class="text-white flex mt-auto ml-auto flex-row align-center items-center gap-3"
                    on:click={startGame}>
                <span class="text-p">Continuer</span>
                <span class="rounded-full decoration-rounded w-8 h-8 p-1">&#x2192</span>
            </button>
        </article>
    </section>
</section>