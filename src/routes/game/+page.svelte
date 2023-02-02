<script lang="ts">
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import SuspectsSelection from "$lib/components/screens/SuspectsSelection.svelte";

    let painting = 0;

    const paintingsSuspects = [
        [
            'bab',
            'bib',
            'bob',
        ],
        [
            'charles',
            'chirles',
            'chorles',
        ],
        [
            'darling',
            'dirling',
            'dorling',
        ]
    ];

    function handleSuspectSelection(event) {
        selectedSuspects.update(function (s) {
            s.push(event.detail.suspect)
            return s;
        });

        painting++;
    }
</script>

<section>
    <div>{ painting }</div>
    <div>{ $selectedSuspects}</div>
    {#if painting < paintingsSuspects.length}
        <SuspectsSelection on:suspect-selected={handleSuspectSelection} suspectsList={paintingsSuspects[painting]}/>
    {/if}
</section>