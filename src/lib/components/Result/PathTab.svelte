<script>
    import ComicsStrip from "$lib/components/ComicsStrip.svelte";
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
</script>

<ComicsStrip suspects={$selectedSuspects}/>