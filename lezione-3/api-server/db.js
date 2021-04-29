const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGO_URI;
const dbName = "local";

function connect() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(uri, function (err, client) {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      console.log("Connected correctly to server");

      resolve(client.db(dbName));
    });
  });
}
async function getAllUsers() {
  return new Promise(async (resolve, reject) => {
    const db = await connect();
    const collection = db.collection("user");

    collection.find({}).toArray(function (err, docs) {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      console.log("Found the following records");
      resolve(docs);
    });
  });
}

async function findUserByEmail(email) {
  return new Promise(async (resolve, reject) => {
    const db = await connect();
    const collection = db.collection("user");

    collection.find({ email }).toArray(function (err, docs) {
      if (err) {
        console.log(err);
        reject(err);
        return;
      }
      console.log("Found the following records");
      resolve(docs[0]);
    });
  });
}

module.exports.findUserByEmail = findUserByEmail;
module.exports.getAllUsers = getAllUsers;
