import React from "react";
import { apple, bill, google } from "../assets";
const Billing = () => (
  <section
    id="products"
    className=" flex flex-col-reverse py-6 sm:py-16  md:flex-row"
  >
    <div className="relative mr-0 mt-10 flex items-center justify-center md:mr-8 md:mt-0">
      <img src={bill} className="relative z-20 h-full w-full" alt="" />
      <div className="absolute -left-1/2 top-0 z-10 w-1/2 rounded-full bg-white/60 blur-[45rem]" />
      <div className="absolute -left-1/2 z-0 h-1/2 w-1/2 rounded-full bg-gradient-to-r from-[#f4c4f3] to-[#fc67fa] blur-[45rem]" />
    </div>
    <div className="flex flex-col items-start justify-center ">
      <h2 className="w-full font-poppins text-[2.5rem]/[4.25rem] font-semibold text-white xs:text-5xl/[4.75rem]">
        Easily control your
        <br className="hidden sm:block" /> billing & invoicing..
      </h2>
      <p className="mt-4 max-w-[30rem] font-poppins text-lg/[2rem] font-normal text-dimWhite">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="mt-6 flex flex-row flex-wrap gap-8 sm:mt-10">
        <img
          alt="apple_store"
          src={apple}
          className="cursor-pointer object-contain"
        />
        <img
          alt="google_store"
          src={google}
          className="cursor-pointer object-contain"
        />
      </div>
    </div>
  </section>
);
export default Billing;
