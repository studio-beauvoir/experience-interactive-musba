import {comics} from "$db/comics";

export async function load(): Promise<object> {
    const data = await comics.find({}, {
        projection: {
            username: 1,
            image: 1
        }
    }).toArray();

    console.log((data))
    return {
        comics: data
    };
}