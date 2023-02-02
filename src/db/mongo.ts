import {MongoClient} from "mongodb"
import {MONGO_DATABASE, MONGO_URI} from '$env/static/private';

const client = new MongoClient(MONGO_URI)

export function start_mongo(): Promise<MongoClient> {
    console.log('mongo connection')
    return client.connect();
}

export default client.db(MONGO_DATABASE) // select database