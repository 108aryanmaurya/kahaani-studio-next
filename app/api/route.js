// pages/api/destinations.js
import { dbConnect } from "@/lib/mongoose";
import Destinations from "@/lib/models/destinations.model";

export async function GET(req, res) {
  try {
    await dbConnect();
    const destinations = await Destinations.find({})
      .sort({ content: -1 })
      .exec();
    console.log("Destinations:", destinations);
    res.statusCode = 200;
    res.json(destinations);
  } catch (error) {
    console.error("Error handling request:", error);
    res.statusCode = 500;
    res.json({ error: "Internal Server Error" });
  }
}
