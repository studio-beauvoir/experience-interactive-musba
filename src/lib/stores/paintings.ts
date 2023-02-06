import {readable} from "svelte/store";

export const paintings = readable([
    {
        name: 'Hommage à Vuillard',
        image: '/images/painting-1.png',
        suspects: [
            {
                id: '1-3',
                name: '3',
                type: 'witness',
                text: 'Heu.. .J’aurais bien eu besoin d’essuyer mon erreur avec la serviette après avoir été dérangé par l’archer',
                position: {
                    x: 14,
                    y: 52
                },
            },
            {
                id: '1-2',
                name: '2',
                type: 'innocent',
                text: 'Hein ? Je n’ai absolument rien à voir avec ça, mon chien est paniqué après avoir vu les deux autres chiens en face',
                position: {
                    x: 52,
                    y: 54
                },
            },
            {
                id: '1-1',
                name: '1',
                type: 'accomplice',
                text: 'Pfff.. .Elle m’énerve celle-là avec sa serviette... Ce n’est pas moi mais bon, ça ne lui ferait pas de mal...',
                position: {
                    x: 85,
                    y: 29
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
                type: 'witness',
                text: 'Pardon ? Une serviette ? Je suis trop occupé à me maintenir en forme. Mais regardez peut-être là où pointe mon arc.',
                position: {
                    x: 25,
                    y: 25
                },
            },
            {
                id: '2-2',
                name: '2',
                type: 'accomplice',
                text: 'Hein ?! Moi voleuse ? Vous m’avez bien regardé ?! Loin de moi cette idée, je n’ai rien à me reprocher.',
                position: {
                    x: 53,
                    y: 35
                },
            },
            {
                id: '2-3',
                name: '3',
                type: 'innocent',
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
                type: 'witness',
                text: 'Quoi ? Une serviette ? Non merci, j’ai ma tunique. La personne là-bas m’a l’air d’avoir froid.',
                position: {
                    x: 23,
                    y: 30
                },
            },
            {
                id: '3-2',
                name: '2',
                type: 'innocent',
                text: 'Hehe ! Écoute moi bien, les guerriers ne portent pas de serviettes, mais des toges, IDIOT, va regarder là-bas si j’y suis.',
                position: {
                    x: 57,
                    y: 47
                },
            },
            {
                id: '3-1',
                name: '1',
                type: 'accomplice',
                text: 'Ah ! Je crois l’avoir entendu souffler par là. Elle a peut-être été emportée par le vent. Allez-y !',
                position: {
                    x: 70,
                    y: 78
                },
            },
        ]
    },
]);