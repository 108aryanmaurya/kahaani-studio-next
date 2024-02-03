"use server";

import ArticleContent from "../models/articlecontent.model";
import Articles from "../models/article.model";

import { dbConnect } from "../mongoose";

export async function fetcharticles() {
  await dbConnect();

  try {
    const articles = await Articles.find({}, { articleContent: 0 }).exec();

    return JSON.parse(JSON.stringify(articles));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    throw error;
  }
}
export async function fetcharticlesbylocation(location) {
  await dbConnect();

  try {
    const articles = await Articles.find(
      { location: { $regex: new RegExp(location, "i") } },
      { articleContent: 0 }
    );

    return JSON.parse(JSON.stringify(articles));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    throw error;
  }
}

export async function fetcharticleswithcontent(articleId) {
  await dbConnect();

  try {
    const articles = await Articles.findOne({ _id: articleId })
      .populate("articleContent")
      .exec();

    if (!articles) {
      return "Article not found";
    }

    return JSON.parse(JSON.stringify(articles));
  } catch (error) {
    console.error("Error fecthing destinations:", error);
    throw error;
  }
}
