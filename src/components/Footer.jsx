import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className="flex flex-col items-center justify-center py-6 sm:py-16">
    <div className="mb-8 w-full flex-col justify-start md:flex-row">
      <div className="mr-10 flex flex-1 flex-col justify-start">
        <img
          src={logo}
          alt="hoobank"
          className="h-[4.5rem] w-[16.75rem] object-contain"
        />
        <p className="mt-4 max-w-[30rem] font-poppins text-lg/[2rem] font-normal text-dimWhite">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="mt-10 flex w-full flex-[1.5] flex-row flex-wrap justify-between md:mt-0">
        {footerLinks.map(({ title, links }, index) => (
          <div
            key={index}
            className={`my-4 flex min-w-[10rem] flex-col ss:my-0`}
          >
            <h4 className="font-poppins text-lg font-medium text-white">
              {title}
            </h4>
            <ul className="mt-4 list-none">
              {links.map(({ name }, index) => (
                <li
                  key={index}
                  className="cursor-pointer font-poppins text-base text-dimWhite hover:text-secondary [&:not(:last-child)]:mb-4"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="flex w-full flex-col items-center justify-between border-t-[1px] border-t-[#3F3E45] pt-6 md:flex-row">
      <p className="text-center font-poppins text-lg font-normal  text-white">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>

      <div className="mt-6 flex flex-row md:mt-0">
        {socialMedia.map(({ id, icon, link }) => (
          <img
            key={id}
            src={icon}
            alt={id}
            className="h-6 w-6 cursor-pointer object-contain [&:not(:last-child)]:mr-6"
            onClick={() => window.open(link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
