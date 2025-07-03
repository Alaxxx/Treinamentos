import { connectToDatabase } from "./connect.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    console.log("Fetching songs from the database...");
    const db = await connectToDatabase();
    const songCollection = await db.collection("songs").find({}).toArray();
    res.status(200).json(songCollection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar musicas" });
  }
}
