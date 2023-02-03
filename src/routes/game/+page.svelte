<script lang="ts">
    import {selectedSuspects} from "$lib/stores/selectedSuspects";
    import PaintingLevel from "$lib/components/PaintingLevel.svelte";
    import {goto} from "$app/navigation";

    let painting = 0;

    const paintings = [
        {
            name: 'Hommage à Vuillard',
            image: '/images/painting-1.png',
            suspects: [
                {
                    id: '1-3',
                    name: '3',
                    text: 'Heu.. .J’aurais bien eu besoin d’essuyer mon erreur avec la serviette après avoir été dérangé par l’archer',
                    position: {
                        x: 14,
                        y: 57
                    },
                },
                {
                    id: '1-2',
                    name: '2',
                    text: 'Hein ? Je n’ai absolument rien à voir avec ça, mon chien est paniqué après avoir vu ses deux autres chiens là-bas\n',
                    position: {
                        x: 52,
                        y: 60
                    },
                },
                {
                    id: '1-1',
                    name: '1',
                    text: 'Pfff.. .Elle m’énerve celle-là avec sa serviette... Ce n’est pas moi mais bon, ça ne lui ferait pas de mal...',
                    position: {
                        x: 85,
                        y: 33
                    },
                },
            ]
        },
        {
            name: 'L\'archer',
            image: '/images/painting-2.png',
            suspects: [
                {
                    id: '2-1',
                    name: '1',
                    text: 'Pardon ? Une serviette ? Je suis trop occupé à me maintenir en forme. Mais regardez peut-être là où pointe mon arc.',
                    position: {
                        x: 25,
                        y: 30
                    },
                },
                {
                    id: '2-2',
                    name: '2',
                    text: 'Hein ?! Moi voleuse ? Vous m’avez bien regardé ?! Loin de moi cette idée, je n’ai rien à me reprocher.',
                    position: {
                        x: 53,
                        y: 40
                    },
                },
                {
                    id: '2-3',
                    name: '3',
                    text: 'Wouaf. je n’ai rien vu. Je n’ai d’yeux que pour mon maître moi. Il est beau mon maître hein. ',
                    position: {
                        x: 77,
                        y: 20
                    },
                },
            ]
        },
        {
            name: 'La gloire de Bordeaux',
            image: '/images/painting-3.png',
            suspects: [
                {
                    id: '3-3',
                    name: '3',
                    text: 'Quoi ? Une serviette ? Non merci, j’ai ma tunique. La personne là-bas m’a l’air d’avoir froid.',
                    position: {
                        x: 23,
                        y: 35
                    },
                },
                {
                    id: '3-2',
                    name: '2',
                    text: 'Hehe ! Écoute moi bien, les guerriers ne portent pas de serviettes, mais des toges, IDIOT, va regarder là-bas si j’y suis.',
                    position: {
                        x: 57,
                        y: 53
                    },
                },
                {
                    id: '3-1',
                    name: '1',
                    text: 'Ah ! Je crois l’avoir entendu souffler par là. Elle a peut-être été emportée par le vent. Allez-y !',
                    position: {
                        x: 70,
                        y: 85
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

<section class="bg-black h-full text-white">
    {#if painting < paintings.length}
        <PaintingLevel on:suspect-selected={handleSuspectSelection} painting={paintings[painting]}/>
    {/if}
</section>