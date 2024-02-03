const mongoose = require("mongoose");

const BlogsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  location: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  blogContent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BlogContent",
  },
});
BlogsSchema.index({ title: "text", blogContent: "text" });

const Blogs = mongoose.models.Blogs || mongoose.model("Blogs", BlogsSchema);

export default Blogs;
