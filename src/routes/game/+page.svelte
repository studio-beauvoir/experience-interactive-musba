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
                {name: 'bab', text: 'Je ne lâche pas mon suspect du regard depuis tout à l’heure, vous devriez regarder par là-bas...', button: 'continuer'},
                {name: 'bib', text: 'Je ne l’ai pas mais j’ai cru l’apercevoir près de chiens.'},
                {name: 'bob', text: 'Je ne peins pas avec les serviettes, mais il me semble que les archers en ont souvent besoin.'},
            ]
        },
        {
            name: 'L\'archer',
            image: 'https://d2lkryo36aywim.cloudfront.net/eyJidWNrZXQiOiJvcGFjLXByb2QtbWVkaWEiLCJrZXkiOiJib3JkZWF1eFwvb3diYTAyXC83ZWRiYjBmZC1jMGQ0LTRlZTQtOWU0My01NmY2M2E1NDYxNzQuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NTAsImhlaWdodCI6NjUwLCJmaXQiOiJpbnNpZGUifX19',
            suspects: [
                {name: 'charles', text: 'Jamais entendu parler de cette serviette. Regarde plutôt là où je vise avec mon arc.'},
                {name: 'chirles', text: 'Comment osez vous me traiter de voleuse ? Ne me confondez pas avec les chasseurs de dragons...'},
                {name: 'chorles', text: 'Une serviette ? Pas de serviette non. Ils ont l’air de regarder là haut, peut être de ce côté.'},
            ]
        },
        {
            name: 'La gloire de Bordeaux',
            image: 'https://d2lkryo36aywim.cloudfront.net/eyJidWNrZXQiOiJvcGFjLXByb2QtbWVkaWEiLCJrZXkiOiJib3JkZWF1eFwvb3diYTAyXC8xOWJhZTAxZC1lMzNiLTQ2MGYtOWQ2Zi1jYmEwNmI4YWRjNzkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NTAsImhlaWdodCI6NjUwLCJmaXQiOiJpbnNpZGUifX19',
            suspects: [
                {name: 'darling', text: 'Votre serviette a peut être été emportée par le vent, je l’entends souffler de ce côté.'},
                {name: 'dirling', text: 'Les guerriers ne portent pas de serviettes, mais il me semble qu’ils en utilisent là-bas...'},
                {name: 'dorling', text: 'Une serviette ? Non merci j’ai ma tunique. Mais cette personne là-bas a peut être froid.'},
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
        <SuspectsSelection on:suspect-selected={handleSuspectSelection} painting={paintings[painting]}/>
    {/if}
</section>