import { features } from "../constants";
import Button from "./Button";
const FeatureCards = features.map(({ id, icon, title, content }) => (
  <div
    key={id}
    className="relative z-0 flex flex-row rounded-[1.25rem] p-6 shadow-md before:absolute before:inset-0 before:-z-10 before:rounded-[1.25rem] before:bg-[image:var(--black-gradient)] before:opacity-0 before:transition-opacity before:duration-300 hover:shadow-[var(--card-shadow)] hover:before:opacity-100 [&:not(:last-child)]:mb-6"
  >
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-dimBlue">
      <img src={icon} alt="icon" className="h-1/2 w-1/2 object-contain" />
    </div>
    <div className="ml-3 flex flex-1 flex-col">
      <h4 className="font-poppins text-lg/[1.5rem] font-semibold text-white">
        {title}
      </h4>
      <p className="font-poppins text-base/[1.5rem] font-normal text-dimWhite">
        {content}
      </p>
    </div>
  </div>
));
const Business = () => {
  return (
    <section id="features" className="flex flex-col py-6 sm:py-16 md:flex-row">
      <div className="flex flex-col items-start justify-center ">
        <h2 className="w-full font-poppins text-[2.5rem]/[4.25rem] font-semibold text-white xs:text-5xl/[4.75rem]">
          You do the business,
          <br className="hidden sm:block" /> we’ll handle the money.
        </h2>
        <p className="mt-4 max-w-[30rem] font-poppins text-lg/[2rem] font-normal text-dimWhite">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles={{ "mt-10 ": true }} />
      </div>
      <div className="ml-0 mt-10 flex-col md:ml-10 md:mt-0">{FeatureCards}</div>
    </section>
  );
};

export default Business;
