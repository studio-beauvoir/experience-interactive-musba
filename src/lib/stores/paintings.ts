import {readable} from "svelte/store";

export const paintings = readable([
    {
        step: 1,
        name: 'Hommage à Vuillard',
        date: '1943',
        author: 'Willem VAN HASSELT ',
        image: '/images/painting-1.webp',
        introDialog: 'Je crois que le 1er complice est dans ce tableau... Je vous en prie, enquêtez et retrouvez ma serviette !',
        statueDialog: 'Le premier complice est ici... Parmi ces trois vieux hommes !',
        suspects: [
            {
                id: '1-3',
                name: '3',
                type: 'witness',
                text: 'Heu... J’aurais bien eu besoin d’essuyer mon erreur avec la serviette après avoir été dérangé par l’archer.',
                comicTitle: 'L’artiste incompris qui comprend qu’il est dérangé.',
                button: {
                    rightSide: false,
                    x: 25,
                    y: 61
                },
                zoom: {
                    x: 12,
                    y: 52
                },
                emotion: {
                    x: 9,
                    y: 52.5,
                    width: 33,
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
                    y: 61
                },
                zoom: {
                    x: 51,
                    y: 54
                },
                emotion: {
                    x: 49.5,
                    y: 53.5,
                    width: 33,
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
                    x: 72,
                    y: 39
                },
                zoom: {
                    x: 86,
                    y: 30
                },
                emotion: {
                    x: 83,
                    y: 29,
                    width: 33,
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
        statueDialog: 'Mmmhhh, le deuxième complice est sûrement dans un tableau près de celui-ci...Peut être en face ?',
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
                zoom: {
                    x: 24,
                    y: 27
                },
                emotion: {
                    x: 21.5,
                    y: 29.5,
                    width: 37,
                },
            },
            {
                id: '2-2',
                name: '2',
                type: 'accomplice',
                text: 'Hein ?! Moi voleuse ? Vous m’avez bien regardé ?! Loin de moi cette idée, je n’ai rien à me reprocher.',
                comicTitle: 'La cachette de la serviette.',
                button: {
                    rightSide: true,
                    x: 40,
                    y: 43
                },
                zoom: {
                    x: 51,
                    y: 35
                },
                emotion: {
                    x: 52.5,
                    y: 35.8,
                    width: 37,
                },
            },
            {
                id: '2-3',
                name: '3',
                type: 'innocent',
                text: 'Wouaf. je n’ai rien vu. Je n’ai d’yeux que pour mon maître moi. Il est beau mon maître hein. ',
                comicTitle: 'Le canidé ciblé.',
                button: {
                    rightSide: false,
                    x: 86,
                    y: 30
                },
                zoom: {
                    x: 76,
                    y: 21
                },
                emotion: {
                    x: 75.5,
                    y: 22,
                    width: 35,
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
        statueDialog: 'On progresse ! Il faut que l’on pense à regarder plus loin que le bout de notre nez, même au dessus...',
        suspects: [
            {
                id: '3-3',
                name: '3',
                type: 'witness',
                text: 'Quoi ? Une serviette ? Non merci, j’ai ma tunique. La personne là-bas m’a l’air d’avoir froid.',
                comicTitle: 'La pose douloureuse (Dupas prenait son temps...)',
                button: {
                    rightSide: true,
                    x: 12,
                    y: 40
                },
                zoom: {
                    x: 19,
                    y: 32
                },
                emotion: {
                    x: 14,
                    y: 29.2,
                    width: 43,
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
                    x: 46,
                    y: 56
                },
                zoom: {
                    x: 56,
                    y: 47.5
                },
                emotion: {
                    x: 50,
                    y: 42,
                    width: 43,
                },
            },
            {
                id: '3-1',
                name: '1',
                type: 'accomplice',
                text: 'Quelle servièèètttte ? Je l’aurais volée avec mes cornes et donnée à un autre tableau pour m’innocenter ? C’est trop bêêêêttteeee.',
                comicTitle: 'La chèvre qui brise les murs, et même le 4ème.',
                button: {
                    rightSide: false,
                    x: 89,
                    y: 49
                },
                zoom: {
                    x: 78,
                    y: 43
                },
                emotion: {
                    x: 79.5,
                    y: 43,
                    width: 43,
                },
            },
        ]
    },
]);