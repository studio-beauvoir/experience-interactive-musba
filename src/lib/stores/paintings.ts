import {readable} from "svelte/store";

export const paintings = readable([
    {
        name: 'Hommage à Vuillard',
        date: '1943',
        author: 'Willem VAN HASSELT ',
        image: '/images/painting-1.png',
        statueDialog: 'Je me demande qui c’est... Vous auriez une idée ?',
        suspects: [
            {
                id: '1-3',
                name: '3',
                type: 'witness',
                text: 'Heu.. .J’aurais bien eu besoin d’essuyer mon erreur avec la serviette après avoir été dérangé par l’archer',
                button: {
                    rightSide: false,
                    x: 25,
                    y: 60
                },
                face: {
                    x: 12,
                    y: 52
                },
            },
            {
                id: '1-2',
                name: '2',
                type: 'innocent',
                text: 'Hein ? Je n’ai absolument rien à voir avec ça, mon chien est paniqué après avoir vu les deux autres chiens en face',
                button: {
                    rightSide: false,
                    x: 65,
                    y: 60
                },
                face: {
                    x: 51,
                    y: 54
                },
            },
            {
                id: '1-1',
                name: '1',
                type: 'accomplice',
                text: 'Pfff.. .Elle m’énerve celle-là avec sa serviette... Ce n’est pas moi mais bon, ça ne lui ferait pas de mal...',
                button: {
                    rightSide: true,
                    x: 73,
                    y: 38
                },
                face: {
                    x: 86,
                    y: 30
                },
            },
        ]
    },
    {
        name: 'L\'archer',
        date: '1917',
        author: 'Jean DUPAS',
        image: '/images/painting-2.png',
        statueDialog: 'Le prochain suspect devrait être ici. Une idée de qui ça pourrait être ?',
        suspects: [
            {
                id: '2-1',
                name: '1',
                type: 'witness',
                text: 'Pardon ? Une serviette ? Je suis trop occupé à me maintenir en forme. Mais regardez peut-être là où pointe mon arc.',
                button: {
                    rightSide: true,
                    x: 13,
                    y: 35
                },
                face: {
                    x: 24,
                    y: 27
                },
            },
            {
                id: '2-2',
                name: '2',
                type: 'accomplice',
                text: 'Hein ?! Moi voleuse ? Vous m’avez bien regardé ?! Loin de moi cette idée, je n’ai rien à me reprocher.',
                button: {
                    rightSide: true,
                    x: 40,
                    y: 43
                },
                face: {
                    x: 51,
                    y: 35
                },
            },
            {
                id: '2-3',
                name: '3',
                type: 'innocent',
                text: 'Wouaf. je n’ai rien vu. Je n’ai d’yeux que pour mon maître moi. Il est beau mon maître hein. ',
                button: {
                    rightSide: false,
                    x: 86,
                    y: 30
                },
                face: {
                    x: 76,
                    y: 21
                },
            },
        ]
    },
    {
        name: 'La gloire de Bordeaux',
        date: '1937',
        author: 'Jean DUPAS',
        image: '/images/painting-3.png',
        statueDialog: 'Bon, on devrait bientôt trouver notre coupable. Il faut continuer les investigations !',
        suspects: [
            {
                id: '3-3',
                name: '3',
                type: 'witness',
                text: 'Quoi ? Une serviette ? Non merci, j’ai ma tunique. La personne là-bas m’a l’air d’avoir froid.',
                button: {
                    rightSide: false,
                    x: 36,
                    y: 39
                },
                face: {
                    x: 19,
                    y: 32
                },
            },
            {
                id: '3-2',
                name: '2',
                type: 'innocent',
                text: 'Hehe ! Écoute moi bien, les guerriers ne portent pas de serviettes, mais des toges, IDIOT, va regarder là-bas si j’y suis.',
                button: {
                    rightSide: true,
                    x: 44,
                    y: 54
                },
                face: {
                    x: 55,
                    y: 47.5
                },
            },
            {
                id: '3-1',
                name: '1',
                type: 'accomplice',
                text: 'Chèvre : Quelle servièèètttte ? Je l’aurai volée avec mes cornes et donnée à un autre tableau pour m’innocenter ? C’est trop bêêêêttteeee.',
                button: {
                    rightSide: false,
                    x: 90,
                    y: 50
                },
                face: {
                    x: 74.5,
                    y: 42
                },
            },
        ]
    },
]);