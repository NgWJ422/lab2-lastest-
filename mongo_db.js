const {MongoClient} = require("mongodb");
const bcrypt = require("bcryptjs")
const saltRounds = 5


async function run(){
    const url = "mongodb://127.0.0.1:27017/lab4";
    const client = new MongoClient(url);

    await client.connect();

    const dbName = "usr";
    const collectionName = "user1";

    const database = client.db(dbName);
    const collection = database.collection(collectionName);

    const user1 = [
        {
            "_id" : "013",
            "name" : "aza",
            "password" : "aza123",
            "phone_no" : "011223344"
        },
        {
            "_id" : "023",
            "name" : "wjie",
            "password" : "wjie123",
            "phone_no" : "012334455"
        },
    ]
    
    const insertManyResult = await collection.insertMany(user1);
    console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
}

run().catch(console.dir);