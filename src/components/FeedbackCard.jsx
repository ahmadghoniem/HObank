import { quotes } from "../assets";
const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="relative z-0 my-5 mr-0 flex max-w-[24rem] flex-col justify-between px-10 py-12 before:absolute before:inset-0 before:-z-10 before:rounded-[1.25rem] before:bg-[image:var(--black-gradient)] before:opacity-0 before:transition-all before:duration-300 before:hover:opacity-100 sm:mr-5 md:mr-10">
      <img src={quotes} alt="quotes" className="h-6 w-10 object-contain" />
      <p className="my-10 font-poppins text-lg/[2rem] font-normal text-white">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} alt={name} className="h-[48px] w-[48px] rounded-full" />
        <div className="ml-4 flex flex-col">
          <h4 className="font-poppins text-lg/[2rem] font-semibold text-white">
            {name}
          </h4>
          <p className="font-poppins text-base/[1.5rem] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
