"use server";

import Blogs from "../models/blog.model";
import BlogContent from "../models/blogcontent.model";

import { dbConnect } from "../mongoose";

export async function fetchblogs() {
  await dbConnect();

  try {
    const blogs = await Blogs.find({}, { blogContent: 0 }).exec();

    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    throw error;
  }
}
export async function fetchblogsbylocation(location) {
  await dbConnect();

  try {
    const blogs = await Blogs.find(
      { location: { $regex: new RegExp(location, "i") } },
      { blogContent: 0 }
    );

    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    throw error;
  }
}

export async function fetchablogswithcontent(blogId) {
  await dbConnect();

  try {
    const blogs = await Blogs.findOne({ _id: blogId })
      .populate("blogContent")
      .exec();

    if (!blogs) {
      return "Article not found";
    }

    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    throw error;
  }
}
