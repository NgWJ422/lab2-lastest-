const { ObjectId } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://127.0.0.1:27017/lab4';

// Database Name
const dbName = 'usr';

// Create a new record
const createRecord = async (id, data) => {
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(dbName);

    // Specify the collection
    const collection = db.collection('user1');

    // Insert the data
    data._id = id; // set _id as a number
    const result = await collection.insertOne(data);
    console.log('Record created:', result.insertedId);
  } catch (err) {
    console.error('Error creating record:', err);
  } finally {
    client.close();
  }
};

// Read records
const readRecords = async () => {
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(dbName);

    // Specify the collection
    const collection = db.collection('user1');

    // Find all records
    const result = await collection.find({}).toArray();
    console.log('Records found:', result);
  } catch (err) {
    console.error('Error reading records:', err);
  } finally {
    client.close();
  }
};

// Update a record
const updateRecord = async (id, newData) => {
    const client = new MongoClient(url);
  
    try {
      await client.connect();
      const db = client.db(dbName);
  
      // Specify the collection
      const collection = db.collection('user1');
  
      // Update the record
      const result = await collection.updateOne({ _id: id }, { $set: newData });
      console.log('Record updated:', result.modifiedCount);
    } catch (err) {
      console.error('Error updating record:', err);
    } finally {
      client.close();
    }
  };
  

// Delete a record
const deleteRecord = async (id) => {
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(dbName);

    // Specify the collection
    const collection = db.collection('user1');

    // Delete the record
    const result = await collection.deleteOne({ _id: id });
    console.log('Record deleted:', result.deletedCount);
  } catch (err) {
    console.error('Error deleting record:', err);
  } finally {
    client.close();
  }
};

// Usage examples
const main = async () => {
  //Create a record
  //await createRecord(123, {name: 'aza', age: 20 });

  // Read records
  await readRecords();

  // Update a record
  //await updateRecord(123, { age: 21 });

  // Delete a record
  //await deleteRecord(123);
};

main().catch(console.error);