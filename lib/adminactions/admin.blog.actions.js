"use server";
import authMiddleware from "../middleware/authMiddleware";
import Blogs from "../models/blog.model";
import BlogContent from "../models/blogcontent.model";
import Destinations from "../models/destinations.model";

import { dbConnect } from "../mongoose";

export async function addblogadmin(blogContent, authtoken) {
  await dbConnect();

  try {
    const { title, category, location, imageURL, content } = blogContent;

    const decoded = authMiddleware(authtoken);
    if (decoded.isAdmin && decoded.id !== "") {
      // Find or create the destination based on the location
      let destination = await Destinations.findOne({ location });

      if (!destination) {
        // If the destination doesn't exist, create a new one
        destination = new Destinations({ location, content: 0 });
      }

      // Increment the content count
      destination.content += 1;
      await destination.save();

      // Create the BlogContent first
      const blogcontent = new BlogContent({ content });
      const savedBlogContent = await blogcontent.save();

      // Create the Blog with the reference to BlogContent
      const blog = new Blogs({
        title,
        category,
        location,
        imageURL,
        blogContent: savedBlogContent._id,
      });

      const savedBlog = await blog.save();

      // Check if the blog was successfully saved
      if (savedBlog) {
        console.log("Blog added successfully:", savedBlog);
        return true;
      } else {
        console.error("Failed to save blog.");
        return false;
      }
    } else {
      console.error("Unauthorized access.");
      return false;
    }
  } catch (error) {
    console.error("Error adding blog:", error);
    return false;
  }
}

export async function deleteBlog(blogId, location, authToken) {
  await dbConnect();

  try {
    const decoded = authMiddleware(authToken);
    if (decoded.isAdmin && decoded.id !== "") {
      // Find the blog by ID and delete it
      const deletedBlog = await Blogs.findByIdAndDelete(blogId);

      if (deletedBlog) {
        await BlogContent.findByIdAndDelete(deletedBlog.blogContent);
        // Check if the content count of the location is 1
        const destination = await Destinations.findOne({ location });
        if (destination) {
          if (destination.content === 1) {
            // If the content count is 1, delete the destination
            await Destinations.findByIdAndDelete(destination._id);
          } else {
            // If the content count is greater than 1, decrement it by 1 and save
            destination.content -= 1;
            await destination.save();
          }
        }
        return true; // Blog deleted successfully
      } else {
        return false; // Blog not found or deletion failed
      }
    } else {
      console.error("Unauthorized access.");
      return false; // Unauthorized access
    }
  } catch (error) {
    console.error("Error deleting blog:", error);
    return false; // Error occurred during deletion
  }
}
