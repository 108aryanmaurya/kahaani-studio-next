import React from "react";
import { fetchablogswithcontent } from "@/lib/actions/blogs.actions";
import Hero from "@/app/_section/SingleBlogPage/LeftSection/BlogHero";
import BlogMainContent from "@/app/_section/SingleBlogPage/LeftSection/BlogMainContent";
import AboutColumn from "@/app/_section/SingleBlogPage/RightSection/AboutColumn";
import ShareModal from "@/app/_section/Share/ShareModal";
import ShareModalHorizonatal from "@/app/_section/Share/ShareModalHorizonatal";
import SingleBlogPageSkeleton from "@/app/_layouts/Skeletons/SingleBlogPageSkeleton";
export default async function page({ params: { blogId, blogName } }) {
  const blogs = await fetchablogswithcontent(blogId);

  if (!blogs || blogs.length === 0) {
    return <SingleBlogPageSkeleton />;
  }
  const { date, title, category, imageURL, blogContent } = blogs;
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
          <BlogMainContent content={blogContent?.content} />
          <ShareModalHorizonatal title={title} />
        </article>
        <div className="pl-5">
          <AboutColumn />
        </div>
      </div>
    </>
  );
}
