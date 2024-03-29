"use server";

import Lifestyle from "../models/lifestyle.model";
import { dbConnect } from "../mongoose";

export async function fetchlifestyle() {
  await dbConnect();

  try {
    const lifestyle = await Lifestyle.find({}, { lifestyleContent: 0 }).exec();
    if (!lifestyle) {
      return false;
    }
    return JSON.parse(JSON.stringify(lifestyle));
  } catch (error) {
    console.error("Error fecthing lifestyle1:", error);
    return false;
  }
}
export async function fetchmorelifestylebycategory({ category }) {
  await dbConnect();

  try {
    const lifestyle = await Lifestyle.find({ category }).exec();
    if (!lifestyle) {
      return false;
    }
    return JSON.parse(JSON.stringify(lifestyle));
  } catch (error) {
    console.error("Error fecthing lifestyle1:", error);
    return false;
  }
}

export async function fetchlifestylewithcontent(lifestyleId) {
  await dbConnect();

  try {
    const lifestyle = await Lifestyle.findOne({ _id: lifestyleId })
      .populate("lifestyleContent")
      .exec();
    console.log(lifestyle);
    if (!lifestyle) {
      return false; // Return false or an empty object
    }
    return JSON.parse(JSON.stringify(lifestyle));
  } catch (error) {
    console.error("Error fecthing lifestyl  e:", error);
    return false;
  }
}
