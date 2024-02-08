"use server";
import Story from "../models/stories.model";
import { dbConnect } from "../mongoose";
// Establish a connection to the MongoDB database
export async function addstory() {
  await dbConnect();
  // Create a new story document
  const newStory = new Story({
    category: "Politics",
    imageUrl:
      "https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Autem sunt tempora mollitia magnam non voluptates",
    storycontent: [
      {
        type: "image",
        url: "https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        duration: 2000,
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1573525526563-5f8a2375f2b7?q=80&w=1000&auhref=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fDklM0ExNnxlbnwwfHwwfHx8MA%3D%3D",
        duration: 2000,
      },
      // Add more story content items as needed
    ],
  });

  // Save the new story document to the database
  newStory
    .save()
    .then(() => {
      console.log("Story saved successfully");
      return true;
    })
    .catch((error) => {
      console.error("Error saving story:", error);
      return false;
    });
}
export async function fetchAllStories() {
  try {
    // Connect to the database
    await dbConnect();
    // await addstory();
    console.log("db connected");
    // Find all stories
    const stories = await Story.find().exec();
    console.log(stories);

    // Return the fetched stories
    return JSON.parse(JSON.stringify(stories));
  } catch (error) {
    console.error("Error fetching stories:", error);
    return false; // Return an empty array if there's an error
  }
}
