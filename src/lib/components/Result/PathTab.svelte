<script>
    import ComicsStrip from "$lib/components/ComicsStrip.svelte";
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
</script>

<div class="px-6">
    <ComicsStrip suspects={$selectedSuspects}/>
</div>
