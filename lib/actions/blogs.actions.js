"use server";

import { notFound } from "next/navigation";
import Blogs from "../models/blog.model";
import BlogContent from "../models/blogcontent.model";

import { dbConnect } from "../mongoose";

export async function fetchblogs() {
  await dbConnect();

  try {
    const blogs = await Blogs.find({}, { blogContent: 0 }).exec();
    if (!blogs) {
      return false; // Return false or an empty object
    }
    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    return false;
  }
}
export async function fetchblogsbylocation(location) {
  await dbConnect();

  try {
    const blogs = await Blogs.find(
      { location: { $regex: new RegExp(location, "i") } },
      { blogContent: 0 }
    );
    if (!blogs) {
      return false; // Return false or an empty object
    }
    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    return false;
  }
}

export async function fetchablogswithcontent(blogId) {
  await dbConnect();

  try {
    const blogs = await Blogs.findOne({ _id: blogId })
      .populate("blogContent")
      .exec();

    if (!blogs) {
      return false; // Return false or an empty object
    }

    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    return false;
  }
}
