<script lang="ts">
    import {goto} from "$app/navigation";

    let dialogsIndex = 0;

    function nextDialogOrGoToResult() {
        if (dialogsIndex + 1 < dialogs.length) {
            dialogsIndex++;
        } else {
            goto('result')
        }
    }

    const dialogs = [
        "Oh non ! Vous m’avez retrouvé ! Et bien oui, c’est moi qui ai volé la serviette !",
        "Mes complices ne m’ont même pas couverte ! Pfff, ils n’ont aucune compassion pour moi...",
        "Et puis c’est elle là aussi à me tourner le dos constamment et à se trémousser au beau milieu de la salle !",
        "Qu’elle la garde sa serviette de gourgandine ! Je n’en ai plus besoin de toute façon !"
    ]
</script>

<section class="flex flex-col items-center justify-center h-screen bg-black overflow-hidden">
    <section class="relative flex-grow w-full overflow-hidden">
        <img alt="Sculpture vue de derrière nommée Femme nue au bord de l'eau"
             class="absolute w-full h-full object-cover"
             src="/images/painting-end.png">
    </section>

    <section class="relative h-44 w-full p-6 border-t border-yellow">
        <img alt=" "
             class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
             src="/images/figures/final-woman.jpg">

        <article class="flex flex-col h-full">
            <p class="text-p text-white flex-grow mr-16">{dialogs[dialogsIndex]}</p>

            <button class="text-white flex mt-auto ml-auto flex-row align-center items-center gap-3"
                    on:click={nextDialogOrGoToResult}>
                <span class="text-p">Continuer</span>
                <span class="rounded-full decoration-rounded w-8 h-8 p-1">&#x2192</span>
            </button>
        </article>
    </section>
</section>