import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {stats} from "$db/collections/stats";

export const GET = (async ({ request }) => {
    for(let i=1; i<=3;i++) {
        for(let j=1; j<=3;j++) {
            for (let k = 1; k <= 3; k++) {

                for(let o=1; o<=Math.floor(Math.random()*100);o++) {
                    stats.insertOne({
                        selectedSuspects: [
                            '1-'+i,
                            '2-'+j,
                            '3-'+k,
                        ]
                    })
                }

            }
        }
    }

    return json(true);
}) satisfies RequestHandler;
