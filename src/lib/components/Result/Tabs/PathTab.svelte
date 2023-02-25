<script>
    import ComicsStrip from "$lib/components/Comic/ComicsStrip.svelte";
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import FeedBack from "$lib/components/Result/FeedBack.svelte";
</script>

<section class="flex flex-col gap-12 px-6 w-full">
    <img alt="" class="absolute -z-10 top-30 right-0" src="/assets/triangle-solo-1.svg">

    <FeedBack suspects={$selectedSuspects}/>

    <div class="bg-brown h-px -mx-6"></div>

    <div class="flex flex-col relative text-center">
        <h1 class="text-h1 text-yellow mb-1">Votre BD</h1>
        <span class="mb-8">(scrollez vers la droite)</span>

        <section class="-mx-6">
            <ComicsStrip suspects={$selectedSuspects}/>
        </section>
    </div>
</section>
