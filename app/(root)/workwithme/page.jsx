import React from "react";
import WorkWithMeHero from "@/app/_section/WorkWithMe/WorkWithMeHero";
import ContactForm from "@/app/_section/WorkWithMe/ContactForm";
export default function page() {
  return (
    <main className="pt-[4rem]">
      <div className="mx-auto max-w-screen-xl pt-14">
        <WorkWithMeHero />
      </div>
      <div className="mx-auto max-w-screen-xl">
        <ContactForm />
      </div>
    </main>
  );
}
