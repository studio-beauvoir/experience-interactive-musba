<script lang="ts">
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import SuspectsSelection from "$lib/components/PaintingLevel.svelte";
    import {goto} from "$app/navigation";

    let painting = 0;

    const paintings = [
        {
            name: 'Hommage à Vuillard',
            image: 'https://d2lkryo36aywim.cloudfront.net/eyJidWNrZXQiOiJvcGFjLXByb2QtbWVkaWEiLCJrZXkiOiJib3JkZWF1eFwvb3diYTAyXC81ZjNkZGExYi1lYWNjLTQ0ZWMtOTAxNC03NGZmOTZiMGRhZmEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NTAsImhlaWdodCI6NjUwLCJmaXQiOiJpbnNpZGUifX19',
            suspects: [
                'bab',
                'bib',
                'bob',
            ]
        },
        {
            name: 'L\'archer',
            image: 'https://d2lkryo36aywim.cloudfront.net/eyJidWNrZXQiOiJvcGFjLXByb2QtbWVkaWEiLCJrZXkiOiJib3JkZWF1eFwvb3diYTAyXC83ZWRiYjBmZC1jMGQ0LTRlZTQtOWU0My01NmY2M2E1NDYxNzQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NTAsImhlaWdodCI6NjUwLCJmaXQiOiJpbnNpZGUifX19',
            suspects: [
                'charles',
                'chirles',
                'chorles',
            ]
        },
        {
            name: 'La gloire de Bordeaux',
            image: 'https://d2lkryo36aywim.cloudfront.net/eyJidWNrZXQiOiJvcGFjLXByb2QtbWVkaWEiLCJrZXkiOiJib3JkZWF1eFwvb3diYTAyXC8xOWJhZTAxZC1lMzNiLTQ2MGYtOWQ2Zi1jYmEwNmI4YWRjNzkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NTAsImhlaWdodCI6NjUwLCJmaXQiOiJpbnNpZGUifX19',
            suspects: [
                'darling',
                'dirling',
                'dorling',
            ]
        },
    ];

    selectedSuspects.set([]);

    function handleSuspectSelection(event) {
        selectedSuspects.update(function (s) {
            s.push(event.detail.suspect)
            return s;
        });

        painting++;

        if (painting >= paintings.length) {
            goto('/game/end')
        }
    }
</script>

<section>
    <div>{ painting }</div>
    <div>{ $selectedSuspects}</div>
    {#if painting < paintings.length}
        <SuspectsSelection on:suspect-selected={handleSuspectSelection} painting={paintings[painting]}/>
    {/if}
</section>