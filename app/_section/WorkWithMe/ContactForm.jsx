"use client";

import React from "react";
import ContactFormInput from "./Contact/ContactFormInput";
import ContactInfo from "./Contact/ContactInfo";
export default function ContactForm() {
  return (
    <>
      <div class="max-w-screen-xl mt-0 flex">
        <div className="w-1/2 flex justify-center items-center max-lg:w-full ">
          <ContactInfo />
        </div>

        <div className="w-1/2 max-lg:w-full">
          <ContactFormInput />
        </div>
      </div>
    </>
  );
}
