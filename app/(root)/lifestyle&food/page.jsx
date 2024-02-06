import React from "react";
import { fetchblogs } from "@/lib/actions/blogs.actions";
import FoodCards from "@/app/_section/LifeStyle/FoodCards";
import LifestyleCard from "@/app/_section/LifeStyle/LifestyleCard";
async function page() {
  const lifestyle = await fetchblogs();

  return (
    <main className="mt-[8rem]">
      <div className="mx-auto max-w-screen-2xl mt-20 max-md:mt-10 ">
        <LifestyleCard lifestyle={lifestyle} />
      </div>
      <div className="mx-auto max-w-screen-xl mt-20 max-md:mt-10 ">
        <FoodCards />
      </div>
    </main>
  );
}

export default page;
