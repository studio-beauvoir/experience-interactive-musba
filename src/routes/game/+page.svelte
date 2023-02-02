<script lang="ts">
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import PaintingLevel from "$lib/components/PaintingLevel.svelte";
    import {goto} from "$app/navigation";

    let painting = 0;

    const paintings = [
        {
            name: 'Hommage à Vuillard',
            image: 'https://d2lkryo36aywim.cloudfront.net/eyJidWNrZXQiOiJvcGFjLXByb2QtbWVkaWEiLCJrZXkiOiJib3JkZWF1eFwvb3diYTAyXC81ZjNkZGExYi1lYWNjLTQ0ZWMtOTAxNC03NGZmOTZiMGRhZmEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NTAsImhlaWdodCI6NjUwLCJmaXQiOiJpbnNpZGUifX19',
            suspects: [
                {
                    name: 'bab',
                    position: {
                        x: 39,
                        y: 47
                    },
                },
                {
                    name: 'bib',
                    position: {
                        x: 63,
                        y: 45
                    },
                },
                {
                    name: 'bob',
                    position: {
                        x: 85,
                        y: 70
                    },
                },
            ]
        },
        {
            name: 'L\'archer',
            image: 'https://d2lkryo36aywim.cloudfront.net/eyJidWNrZXQiOiJvcGFjLXByb2QtbWVkaWEiLCJrZXkiOiJib3JkZWF1eFwvb3diYTAyXC83ZWRiYjBmZC1jMGQ0LTRlZTQtOWU0My01NmY2M2E1NDYxNzQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NTAsImhlaWdodCI6NjUwLCJmaXQiOiJpbnNpZGUifX19',
            suspects: [
                {
                    name: 'charles',
                    position: {
                        x: 43,
                        y: 75
                    },
                },
                {
                    name: 'chirles',
                    position: {
                        x: 63,
                        y: 65
                    },
                },
                {
                    name: 'chorles',
                    position: {
                        x: 83,
                        y: 82
                    },
                },
            ]
        },
        {
            name: 'La gloire de Bordeaux',
            image: 'https://d2lkryo36aywim.cloudfront.net/eyJidWNrZXQiOiJvcGFjLXByb2QtbWVkaWEiLCJrZXkiOiJib3JkZWF1eFwvb3diYTAyXC8xOWJhZTAxZC1lMzNiLTQ2MGYtOWQ2Zi1jYmEwNmI4YWRjNzkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NTAsImhlaWdodCI6NjUwLCJmaXQiOiJpbnNpZGUifX19',
            suspects: [
                {
                    name: 'darling',
                    position: {
                        x: 23,
                        y: 70
                    },
                },
                {
                    name: 'dorling',
                    position: {
                        x: 34,
                        y: 55
                    },
                },
                {
                    name: 'dirling',
                    position: {
                        x: 38,
                        y: 26
                    },
                },
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
        <PaintingLevel on:suspect-selected={handleSuspectSelection} painting={paintings[painting]}/>
    {/if}
</section>