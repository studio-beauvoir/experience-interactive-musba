<script>
    import SecondaryButton from "$lib/components/Button/SecondaryButton.svelte";
    import ComicsStrip from "$lib/components/Comic/ComicsStrip.svelte";
    import SuspectsTimeline from "$lib/components/Suspect/SuspectsTimeline.svelte";

    export let parcours;
    export let handleDetailsQuit
</script>

<section class="flex flex-col gap-16">
    <SecondaryButton handleClick={handleDetailsQuit} soundId="reverse">Retour aux parcours</SecondaryButton>
    <article>
        <h2 class="text-h2 text-yellow pb-4">Parcours</h2>
        <section class="grid grid-cols-5 gap-4 items-end">
            <h1 class="col-span-2 font-display text-[12rem] leading-none uppercase text-yellow -mb-4">{parcours.letter}</h1>
            <section class="col-span-3 flex flex-col items-start gap-2">
                <p class="text-p">Les accusés de ce parcours</p>
                <SuspectsTimeline classList="w-auto" suspects={parcours.suspects}/>
            </section>
        </section>
    </article>

    <div class="bg-brown h-px -mx-6"></div>

    <article class="flex flex-col gap-10">
        <h2 class="text-h1 text-yellow">BD de ce parcours</h2>
        <ComicsStrip suspects={parcours.suspects}/>
    </article>
</section>