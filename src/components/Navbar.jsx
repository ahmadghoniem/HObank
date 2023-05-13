import { useState } from "react";
import { close, logo, hamburgerMenu } from "../assets";
import { navLinks } from "../constants";
import classNames from "classnames";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinksElements = navLinks.map(({ id, title }) => (
    <li
      key={id}
      className="cursor-pointer font-poppins text-base font-normal text-white "
    >
      <a href={`#${id}`}>{title}</a>
    </li>
  ));
  return (
    <nav className=" flex w-full flex-row justify-between py-6">
      <img src={logo} alt="handbook" className="h-[32px] w-[124px]" />
      <ul className="hidden list-none items-center gap-10 sm:flex">
        {navLinksElements}
      </ul>
      <div className="flex flex-col items-center justify-end sm:hidden">
        <img
          src={isOpen ? close : hamburgerMenu}
          alt="hamburgerMenu"
          className=" h-7 w-7 object-contain"
          onClick={() => setIsOpen((prevState) => !prevState)}
        />
        <div
          /** you can “hint” the underlying type by adding a CSS data type before the value bg-[image:var(--black-gradient)]
           * The <image> data type can be represented by gradient data type
           */
          className={classNames(
            "absolute right-0 top-20 mx-4 min-w-[9rem] rounded-xl bg-[image:var(--black-gradient)] p-6",
            { flex: isOpen, hidden: !isOpen }
          )}
        >
          <ul className="flex list-none flex-col items-center font-poppins">
            {navLinksElements}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
