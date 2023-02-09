<script>
    import ComicsStrip from "$lib/components/Comic/ComicsStrip.svelte";
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import FeedBack from "$lib/components/Result/FeedBack.svelte";
</script>

<section class="flex flex-col gap-16 px-6">
    <img alt="" class="absolute -z-10 top-30 right-0" src="/assets/triangle-solo-1.svg">

    <FeedBack suspects={$selectedSuspects}/>

    <div class="bg-brown h-px -mx-6"></div>

    <div class="flex flex-col gap-10">
        <h1 class="text-h1 text-yellow mx-auto">Votre BD</h1>
        <ComicsStrip suspects={$selectedSuspects}/>
    </div>
</section>
