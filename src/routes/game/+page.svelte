<script lang="ts">
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import PaintingLevel from "$lib/components/PaintingLevel.svelte";
    import {goto} from "$app/navigation";

    let painting = 2;

    const paintings = [
        {
            name: 'Hommage à Vuillard',
            image: 'https://d2lkryo36aywim.cloudfront.net/eyJidWNrZXQiOiJvcGFjLXByb2QtbWVkaWEiLCJrZXkiOiJib3JkZWF1eFwvb3diYTAyXC81ZjNkZGExYi1lYWNjLTQ0ZWMtOTAxNC03NGZmOTZiMGRhZmEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NTAsImhlaWdodCI6NjUwLCJmaXQiOiJpbnNpZGUifX19',
            suspects: [
                {
                    name: '1',
                    text: 'Je ne lâche pas mon suspect du regard depuis tout à l’heure, vous devriez regarder par là-bas...',
                    position: {
                        x: 85,
                        y: 70
                    },
                },
                {
                    name: '2',
                    text: 'Je ne l’ai pas mais j’ai cru l’apercevoir près de chiens.',
                    position: {
                        x: 63,
                        y: 45
                    },
                },
                {
                    name: '3',
                    text: 'Je ne peins pas avec les serviettes, mais il me semble que les archers en ont souvent besoin.',
                    position: {
                        x: 39,
                        y: 47
                    },
                },
            ]
        },
        {
            name: 'L\'archer',
            image: 'https://d2lkryo36aywim.cloudfront.net/eyJidWNrZXQiOiJvcGFjLXByb2QtbWVkaWEiLCJrZXkiOiJib3JkZWF1eFwvb3diYTAyXC83ZWRiYjBmZC1jMGQ0LTRlZTQtOWU0My01NmY2M2E1NDYxNzQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NTAsImhlaWdodCI6NjUwLCJmaXQiOiJpbnNpZGUifX19',
            suspects: [
                {
                    name: '1',
                    text: 'Jamais entendu parler de cette serviette. Regarde plutôt là où je vise avec mon arc.',
                    position: {
                        x: 43,
                        y: 75
                    },
                },
                {
                    name: '2',
                    text: 'Comment osez vous me traiter de voleuse ? Ne me confondez pas avec les chasseurs de dragons...',
                    position: {
                        x: 63,
                        y: 65
                    },
                },
                {
                    name: '3',
                    text: 'Une serviette ? Pas de serviette non. Ils ont l’air de regarder là haut, peut être de ce côté.',
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
                    name: '1',
                    text: 'Votre serviette a peut être été emportée par le vent, je l’entends souffler de ce côté.',
                    position: {
                        x: 38,
                        y: 26
                    },
                },
                {
                    name: '2',
                    text: 'Les guerriers ne portent pas de serviettes, mais il me semble qu’ils en utilisent là-bas...',
                    position: {
                        x: 34,
                        y: 55
                    },
                },
                {
                    name: '3',
                    text: 'Une serviette ? Non merci j’ai ma tunique. Mais cette personne là-bas a peut être froid.',
                    position: {
                        x: 23,
                        y: 70
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
    {#if painting < paintings.length}
        <PaintingLevel on:suspect-selected={handleSuspectSelection} painting={paintings[painting]}/>
    {/if}
</section>