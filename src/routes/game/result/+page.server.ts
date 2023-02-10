import type { PageLoad } from './$types';
import {stats} from "$db/collections/stats";

export const load = (async ({ params }) => {
    const statsCounts = await stats.aggregate([
        {
            $group: {
                _id: {selectedSuspects: "$selectedSuspects"},
                total: {$sum: 1},
            }
        }
    ]).toArray();

    const lowestId = statsCounts[0]?._id?.selectedSuspects?.join('_');
    const highestID = statsCounts[statsCounts.length - 1]?._id?.selectedSuspects?.join('_');

    return {
        lowestId,
        highestID
    };
}) satisfies PageLoad;