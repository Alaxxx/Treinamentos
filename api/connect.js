import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://spotifyUser:spotifyUser$123@cluster0.qfyylgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

let db;

export async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db("spotifyAula"); // Substitua pelo nome do banco se for diferente
  }
  return db;
}
