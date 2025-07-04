import { MongoClient } from "mongodb";

console.log("MONGODB_URI:", process.env.MONGODB_URI);
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let db;

export async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db("spotifyAula"); // Substitua pelo nome do banco se for diferente
  }
  return db;
}
