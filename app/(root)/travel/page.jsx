import React from "react";
import Hero from "@/app/_section/Travel/Hero/Hero";
import TravelDestinations from "@/app/_section/Travel/TravelDestination/TravelDestinations";
import { fetchdestinations } from "@/lib/actions/destination.actions";
import { fetchblogs } from "@/lib/actions/blogs.actions";
import { fetcharticles } from "@/lib/actions/articles.actions";
import BlogContent from "@/app/_section/Travel/Blogs/BlogContent";
import Articles from "@/app/_section/Travel/Articles/Articles";
export default async function page() {
  const destinations = await fetchdestinations();
  const blogs = await fetchblogs();
  const articles = await fetcharticles();

  return (
    <main className="pt-[4rem]">
      <div>
        <Hero />
      </div>
      <div className="mx-auto max-w-screen-xl pt-14">
        <TravelDestinations destinations={destinations} />
      </div>
      <div className="mx-auto mt-40 max-w-screen-xl max-md:mt-10">
        <Articles articles={articles} />
      </div>
      <div className="mx-auto mt-40 max-w-screen-xl max-md:mt-10 ">
        <BlogContent blogs={blogs} />
      </div>
    </main>
  );
}
