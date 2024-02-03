import { fetchblogs } from "@/lib/actions/blogs.actions";
import { fetcharticles } from "@/lib/actions/articles.actions";

function encodeUrl(url) {
  return url.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export default async function sitemap() {
  const blogs = await fetchblogs();
  const articles = await fetcharticles();

  // Create an array to store the blog URLs
  const blogUrls = blogs.map((blog) => ({
    url: encodeUrl(
      `${process.env.PUBLIC_BASE_URL}/blogs/${blog?._id}/${blog.title
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    ),
  }));
  const articleUrls = articles.map((article) => ({
    url: encodeUrl(
      `${process.env.PUBLIC_BASE_URL}/articles/${article?._id}/${article.title
        .toLowerCase()
        .replace(/\s+/g, "-")}`
    ),
  }));

  return [
    { url: encodeUrl(`${process.env.PUBLIC_BASE_URL}/`) },
    { url: encodeUrl(`${process.env.PUBLIC_BASE_URL}/travel`) },
    { url: encodeUrl(`${process.env.PUBLIC_BASE_URL}/destination`) },
    { url: encodeUrl(`${process.env.PUBLIC_BASE_URL}/lifestyle&food`) },
    { url: encodeUrl(`${process.env.PUBLIC_BASE_URL}/workwithme`) },
    ...blogUrls,
    ...articleUrls,
  ];
}
