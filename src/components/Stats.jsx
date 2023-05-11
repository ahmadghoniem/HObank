import React from "react";
import { stats } from "../constants";

const Stats = () => (
  <section className="mb-6 flex flex-row flex-wrap items-center justify-center sm:mb-20">
    {stats.map(({ id, value, title }) => (
      <>
        <div
          key={id}
          className="m-4 flex flex-row items-center justify-between"
        >
          <h4 className="font-poppins text-3xl/[2.75rem] font-semibold text-white xs:text-[2.5rem]/[3.25rem]">
            {value}
          </h4>
          <h4 className="ml-2 bg-[image:var(--text-gradient)] bg-clip-text font-poppins text-base/[1.25rem] font-normal uppercase text-transparent  xs:text-xl/[1.5rem]">
            {title}
          </h4>
        </div>

        <div className=" mx-12 hidden h-4 border-l-[0.1rem] border-white/60  md:[&:not(:last-child)]:block"></div>
      </>
    ))}
  </section>
);
export default Stats;
