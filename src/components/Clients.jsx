import React from "react";
import { clients } from "../constants";
const Clients = () => (
  <section
    id="clients"
    className="flex scroll-mt-10 items-center justify-center"
  >
    <div className="relative z-0 flex w-full flex-wrap items-center justify-around">
      {clients.map(({ id, logo }) => (
        <div key={id} className=" min-w-[8rem] sm:min-w-[12rem]">
          <img
            src={logo}
            alt="client logo"
            className="w-24 object-contain sm:w-48"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
