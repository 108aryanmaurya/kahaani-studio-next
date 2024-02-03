import React from "react";
import { fetcharticles } from "@/lib/actions/articles.actions";
import Articles from "@/app/_section/Travel/Articles/Articles";
import Noresults from "@/app/_layouts/Noresults";
async function page() {
  const articles = await fetcharticles();
  if (articles == false) {
    return <Noresults />;
  }
  return (
    <main className="mt-[4.5rem]">
      <div className="mx-auto max-w-screen-xl mt-20 max-md:mt-10 ">
        <h1 className="text-center my-5 mb-20 font-CooperHewitt text-4xl font-thin uppercase max-md:text-xl">
          Articles
        </h1>
        <Articles articles={articles} />
      </div>
    </main>
  );
}

export default page;
