import React from "react";
import FoodCards from "@/app/_section/LifeStyle/FoodCards";
import LifestyleCard from "@/app/_section/LifeStyle/LifestyleCard";
import { fetchlifestyle } from "@/lib/actions/lifestyle.actions";
async function page() {
  const lifestyle = await fetchlifestyle();

  return (
    <main className="mt-[8rem]">
      <div className="mx-auto max-w-screen-2xl mt-20 max-md:mt-10 ">
        <LifestyleCard lifestyle={lifestyle} />
      </div>
      <div className="mx-auto max-w-screen-xl mt-20 max-md:mt-10 ">
        <FoodCards />
      </div>
      <div></div>
    </main>
  );
}

export default page;
