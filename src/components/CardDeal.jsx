import React from "react";
import Button from "./Button";
import { card } from "../assets";

const CardDeal = () => (
  <section className="flex flex-col py-6 sm:py-16 md:flex-row">
    <div className="flex flex-col items-start justify-center">
      <h2 className="w-full font-poppins text-[2.5rem]/[4.25rem] font-semibold text-white xs:text-5xl/[4.75rem]">
        Find a better card deal
        <br className="hidden sm:block" /> in few easy steps.
      </h2>
      <p className="mt-4 max-w-[30rem] text-dimWhite">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles={{ "mt-10 ": true }} />
    </div>
    <div className=" ml-0 mt-10 flex md:ml-10 md:mt-0">
      <img src={card} alt="card" className="h-full w-full " />
    </div>
  </section>
);
export default CardDeal;
