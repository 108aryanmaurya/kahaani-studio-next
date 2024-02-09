import React from "react";
import {
  fetchablogswithcontent,
  fetchblogs,
} from "@/lib/actions/blogs.actions";
import Hero from "@/app/_section/SingleBlogPage/LeftSection/BlogHero";
import BlogMainContent from "@/app/_section/SingleBlogPage/LeftSection/BlogMainContent";
import AboutColumn from "@/app/_section/SingleBlogPage/RightSection/AboutColumn";
import ShareModal from "@/app/_section/Share/ShareModal";
import ShareModalHorizonatal from "@/app/_section/Share/ShareModalHorizonatal";
import SingleBlogPageSkeleton from "@/app/_layouts/Skeletons/SingleBlogPageSkeleton";
import { cache } from "react";
import { notFound } from "next/navigation";
import MoreBlogs from "@/app/_section/SingleBlogPage/RightSection/MoreBlogs";

const getblogs = cache(async (blogId) => {
  const blogs = await fetchablogswithcontent(blogId);
  return blogs;
});

export async function generateStaticParams() {
  const blogs = await fetchblogs();
  return blogs
    .map((blog) => ({
      params: {
        blogId: blog._id,
        blogName: blog.title,
      },
    }))
    .slice(0, 10);
}
export async function generateMetadata({ params: { blogId } }) {
  const blogs = await getblogs(blogId);
  if (blogs === false) {
    return notFound();
  }
  const { title, imageURL } = blogs;
  return {
    title: title,
    description: "This is the BlogPage Description",
    openGraph: {
      title: title,
      description: "This is the BlogPage of Kahaani Studio Description",
      images: imageURL,
    },
    image: imageURL,
  };
}
export default async function page({ params: { blogId, blogName } }) {
  const blogs = await getblogs(blogId);

  if (blogs === false) {
    return notFound();
  }

  const { date, title, category, imageURL, blogContent } = blogs;
  console.log(category);
  return (
    <>
      <ShareModal title={title} />
      <div className="mx-auto mt-16 flex w-full items-start justify-start px-10 max-md:flex-col max-md:px-5 max-sm:px-0">
        <article className="min-w-[73vw] max-w-[73vw] border-r border-black pr-10 max-md:max-w-full max-md:border-none max-md:pr-0  2xl:max-w-[70vw]">
          <Hero
            title={title}
            date={date}
            category={category}
            imageURL={imageURL}
          />
          <div className="sm:hidden">
            <ShareModalHorizonatal title={title} />
          </div>
          {blogContent && <BlogMainContent content={blogContent.content} />}
          <ShareModalHorizonatal title={title} />
        </article>
        <div className="pl-5">
          <AboutColumn />
          <MoreBlogs category={category} />

        </div>
      </div>
    </>
  );
}
