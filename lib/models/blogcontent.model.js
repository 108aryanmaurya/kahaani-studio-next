const mongoose = require("mongoose");

const BlogContentSchema = new mongoose.Schema({
  content: {
    type: String,
  },
});

const BlogContent =
  mongoose.models.BlogContent ||
  mongoose.model("BlogContent", BlogContentSchema);

export default BlogContent;
