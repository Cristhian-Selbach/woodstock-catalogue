import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.STRING_CONNECTION || "");
client.connect();
export default client.db("WoodStock");
