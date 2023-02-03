import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {stats} from "$db/collections/stats";

export const POST = (async ({ request }) => {
    const jsonData = await request.json();
    console.log(jsonData);
    if(!jsonData.selectedSuspects || !jsonData.selectedSuspects?.length) {
        return json(false)
    }

    // for(let o=1; o<=100;o++) {
    //     for(let i=1; i<=3;i++) {
    //         for(let j=1; j<=3;j++) {
    //             for (let k = 1; k <= 3; k++) {
    //                 stats.insertOne({
    //                     selectedSuspects: [
    //                         '1-'+i,
    //                         '2-'+j,
    //                         '3-'+k,
    //                     ]
    //                 })
    //             }
    //         }
    //     }
    // }
    stats.insertOne({
        selectedSuspects: jsonData.selectedSuspects
    })

    return json(true);
}) satisfies RequestHandler;