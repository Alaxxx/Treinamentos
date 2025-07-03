import { connectToDatabase } from "./connect.js";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  try {
    console.log("Fetching artists from the database...");
    const db = await connectToDatabase();
    const artistCollection = await db.collection("artists").find({}).toArray();
    res.status(200).json(artistCollection);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar artistas" });
  }
}
