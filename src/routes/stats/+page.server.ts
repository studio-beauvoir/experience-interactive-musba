import {stats} from "$db/collections/stats";

export async function load(): Promise<object> {
    const data = await stats.find().toArray();

    const statsCounts: Array<object> = await stats.aggregate([
        {
            $group: {
                _id: {selectedSuspects: "$selectedSuspects"},
                total: {$sum: 1},
            }
        }
    ]).toArray();

    console.log(structuredClone(statsCounts))

    return {
        statsCounts: structuredClone(statsCounts)
    };
}