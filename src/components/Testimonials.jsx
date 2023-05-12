import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
const Testimonials = () => (
  <section
    id="testimonials"
    className="relative flex flex-col items-center justify-center py-6 sm:py-16"
  >
    <div className="absolute -right-1/2 z-0 h-3/5 w-3/5 rounded-full bg-[image:var(--blue-gradient)] blur-[8rem]" />
    <div className="relative z-10 mb-6 flex w-full flex-col items-center justify-between sm:mb-16 md:flex-row">
      <h1 className="w-full font-poppins text-[2.5rem]/[4.25rem] font-semibold text-white xs:text-5xl/[4.75rem]">
        What people are
        <br className="hidden sm:block" /> saying about us
      </h1>
      <div className="mt-6 w-full md:mt-0">
        <p className="mt-4 max-w-[30rem] text-dimWhite">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>
    <div className="relative z-10 flex w-full flex-wrap justify-center sm:justify-start">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);
export default Testimonials;
