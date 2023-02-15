<script lang="ts">
    import {goto} from "$app/navigation";
    import SuspectsTimeline from '$lib/components/Suspect/SuspectsTimeline.svelte';
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import PaintingIntroduction from "$lib/components/Painting/PaintingIntroduction.svelte";
    import DialogButton from "$lib/components/Button/DialogButton.svelte";
    import PrimaryButton from "$lib/components/Button/PrimaryButton.svelte";
    import {paintings} from "$lib/stores/paintings";

    if ($selectedSuspects.length !== $paintings.length) {
        goto('/game');
    }

    let dialogsIndex = 0;

    const transitionDuration = 500;
    let isShowingIntroduction = true;

    $: endDialogsReached = dialogsIndex >= dialogs.length;

    const painting = {
        name: 'La femme nue',
        date: 'avant 1920',
        author: 'Georges Dorignac',
        statueDialog: 'Mais ! C’est ma serviette ! Voleuse !',
    }

    function hideIntroduction() {
        isShowingIntroduction = false;
    }

    function nextDialog() {
        dialogsIndex++;
    }

    function goToResult() {
        goto('result')
    }

    const dialogs = [
        "Oh non ! Vous m’avez retrouvée ! Et bien oui, c’est moi qui ai volé la serviette !",
        "Mes complices ne m’ont même pas couverte ! Pfff, ils n’ont aucune compassion pour moi...",
        "Et puis c’est de sa faute à elle aussi, à me tourner le dos constamment et à se trémousser au beau milieu de la salle !",
        "Qu’elle la garde sa serviette de gourgandine ! Je n’en ai plus besoin de toute façon !"
    ]
</script>

<section class="flex flex-col items-center justify-center h-full bg-black overflow-hidden">
    <section class="relative flex-grow w-full overflow-hidden">
        <picture>
            <source srcset="/images/painting-end-min.webp" type="image/webp">
            <img alt="Sculpture vue de derrière nommée Femme nue au bord de l'eau"
                 class="absolute w-full h-full object-cover"
                 src="/images/painting-end-min.png">
        </picture>

        {#if isShowingIntroduction}
            <PaintingIntroduction handleClick={hideIntroduction} painting={painting}
                                  transitionDuration={transitionDuration}/>
        {:else}
            <div class="absolute z-10 w-full left-0 top-4">
                <SuspectsTimeline suspects={$selectedSuspects}/>
            </div>
        {/if}
    </section>

    <section class="relative h-44 w-full p-6 border-t border-yellow text-white">
        {#if isShowingIntroduction}
            <img alt="Figure au bord de l'eau"
                 class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
                 src="/images/figures/statue.jpg">

            <article class="flex flex-col gap-4 h-full">
                <p class="text-p mr-16">{painting.statueDialog}</p>

                <DialogButton handleClick={hideIntroduction}>Continuer</DialogButton>
            </article>
        {:else if endDialogsReached}
            <img alt="Figure au bord de l'eau"
                 class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
                 src="/images/figures/statue.jpg">

            <article class="flex flex-col gap-4 h-full">
                <p class="text-p mr-16">Merci de votre aide inspecteur, j'ai retrouvé ma serviette grâce à
                    vous&nbsp;!</p>

                <PrimaryButton handleClick={goToResult}>Fin de l'enquête</PrimaryButton>
            </article>
        {:else}
            <img alt="La femme nue"
                 class="absolute right-6 top-0 h-14 w-14 -translate-y-1/2 border-2 border-yellow rounded-full"
                 src="/images/figures/final-woman.jpg">

            <article class="flex flex-col gap-4 h-full">
                <p class="text-p text-white flex-grow mr-16">{dialogs[dialogsIndex]}</p>

                <DialogButton handleClick={nextDialog}>Continuer</DialogButton>
            </article>
        {/if}
    </section>
</section>