import {stats} from "$db/collections/stats";

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

export async function load() {


    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            for (let k = 1; k <= 3; k++) {

                for (let o = 1; o <= getRandomInt(100); o++) {
                    stats.insertOne({
                        selectedSuspects: [
                            '1-' + i,
                            '2-' + j,
                            '3-' + k,
                        ]
                    })
                }

            }
        }
    }

}