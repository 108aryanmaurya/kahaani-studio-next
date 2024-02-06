import React from "react";
import WorkWithMeHero from "@/app/_section/WorkWithMe/WorkWithMeHero";
import ContactForm from "@/app/_section/WorkWithMe/ContactForm";
export default function page() {
  return (
    <main className="pt-[4rem] p-5 2xl:p-0">
      <div className="mx-auto max-w-screen-2xl pt-10 2xl:pt-20">
        <WorkWithMeHero />
      </div>
      <div className="mx-auto max-w-screen-2xl">
        <ContactForm />
      </div>
    </main>
  );
}
