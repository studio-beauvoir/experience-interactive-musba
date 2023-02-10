import {readable} from "svelte/store";

export const paintings = readable([
    {
        step: 1,
        name: 'Hommage à Vuillard',
        date: '1943',
        author: 'Willem VAN HASSELT ',
        image: '/images/painting-1.webp',
        introDialog: 'J’ai cru voir le 1er complice partir en direction de ce tableau... Je vous en prie, enquêtez pour retrouver ma serviette !',
        statueDialog: 'Je me demande qui c’est... Vous auriez une idée ?',
        suspects: [
            {
                id: '1-3',
                name: '3',
                type: 'witness',
                text: 'Heu.. .J’aurais bien eu besoin d’essuyer mon erreur avec la serviette après avoir été dérangé par l’archer.',
                comicTitle: 'L’artiste surpris qui en cassa même ses ustensiles. Impensable ! mais pourtant vrai.',
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
                text: 'Hein ? Je n’ai absolument rien à voir avec ça, mon chien est paniqué après avoir vu les deux autres chiens en face.',
                comicTitle: 'Le monsieur et son tout petit mini minou chien tout choupi ♡',
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
                text: 'Pfff, elle m’énerve celle-là avec sa serviette... Ce n’est pas moi mais bon, ça ne lui ferait pas de mal...',
                comicTitle: 'Le barbu à la chaise indiscrète.',
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
        step: 2,
        name: 'L\'archer',
        date: '1917',
        author: 'Jean DUPAS',
        image: '/images/painting-2.webp',
        introDialog: 'J’ai cru voir le 2ème complice partir en direction de ce tableau !',
        statueDialog: 'Le prochain complice devrait être ici. Une idée de qui ça pourrait être ?',
        suspects: [
            {
                id: '2-1',
                name: '1',
                type: 'witness',
                text: 'Pardon ? Une serviette ? Je suis trop occupé à me maintenir en forme. Mais regardez peut-être là où pointe mon arc.',
                comicTitle: 'L’homme, tout sauf narcissique.',
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
                text: 'Hein ? Moi voleuse ? Vous m’avez bien regardée ?! Loin de moi cette idée, je n’ai rien à me reprocher.',
                comicTitle: 'La cachette de la serviette.',
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
                text: 'Wouaf. je n’ai rien vu. Je n’ai d’yeux que pour mon maître moi. Il est beau mon maître hein. ',
                comicTitle: 'Le canidé ciblé.',
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
        step: 3,
        name: 'La gloire de Bordeaux',
        date: '1937',
        author: 'Jean DUPAS',
        image: '/images/painting-3.webp',
        introDialog: 'J’ai cru voir le 3ème complice partir en direction de ce tableau !',
        statueDialog: 'Bon, on devrait bientôt trouver notre coupable. Il faut continuer les investigations !',
        suspects: [
            {
                id: '3-3',
                name: '3',
                type: 'witness',
                text: 'Quoi ? Une serviette ? Non merci, j’ai ma tunique. La personne là-bas m’a l’air d’avoir froid.',
                comicTitle: 'La pose douloureuse (Dupas prenait son temps...)',
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
                text: 'Hehe ! Écoute moi bien, les guerriers ne portent pas de serviettes, mais des toges, IDIOT, va regarder là-bas si j’y suis.',
                comicTitle: 'Un chasseur sachant chasser sait chasser sans son reflet.',
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
                text: 'Quelle servièèètttte ? Je l’aurais volée avec mes cornes et donnée à un autre tableau pour m’innocenter ? C’est trop bêêêêttteeee.',
                comicTitle: 'La chèvre qui brise les murs, et même le 4ème.',
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