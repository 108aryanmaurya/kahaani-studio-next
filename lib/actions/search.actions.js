"use server";
import Articles from "../models/article.model";
import Destinations from "../models/destinations.model";
import Blogs from "../models/blog.model";
import { dbConnect } from "../mongoose";

export async function searcheverything(searchText) {
  await dbConnect();

  try {
    if (searchText.length < 1) {
      return res
        .status(400)
        .json({ error: "Search text should be at least 3 characters long" });
    }

    // Create a case-insensitive regular expression for partial matching
    const regex = new RegExp(searchText, "i");

    // Search for blogs with partial match
    const blogs = await Blogs.find({ title: { $regex: regex } });

    // Search for articles with partial match
    const articles = await Articles.find({ title: { $regex: regex } });

    // Search for destinations with partial match
    const destinations = await Destinations.find({
      location: { $regex: regex },
    });

    // Prepare a response object with separate arrays for blogs, articles, and destinations
    const results = {
      blogs,
      articles,
      destinations,
    };
    if (!results) {
      return false;
    }
    return JSON.parse(JSON.stringify(results));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    return false;
  }
}
