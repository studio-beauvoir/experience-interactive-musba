import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import {stats} from "$db/collections/stats";

export const POST = (async ({ request }) => {
    const jsonData = await request.json();

    if(jsonData?.selectedSuspectsIds?.length !== 3) {
        return json(false)
    }

    stats.insertOne({
        selectedSuspects: jsonData.selectedSuspectsIds
    })

    return json(true);
}) satisfies RequestHandler;

export const GET = (async ({ request }) => {
    const data = await stats.find().toArray();

    const statsCounts: Array<object> = await stats.aggregate([
        {
            $group: {
                _id: {selectedSuspects: "$selectedSuspects"},
                total: {$sum: 1},
            }
        }
    ]).toArray();
    return json(statsCounts);
}) satisfies RequestHandler;
