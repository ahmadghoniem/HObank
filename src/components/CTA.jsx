import Button from "./Button";

const CTA = () => (
  <section className=" my-6 flex flex-col items-center justify-center rounded-[1.25rem] bg-[image:var(--bg-black-gradient2)] px-6 py-4 shadow-[0px_20px_100px_-10px_rgb(66,71,91,0.1)] sm:my-16 sm:flex-row sm:px-16 sm:py-12">
    <div className="flex flex-1 flex-col">
      <h2 className="font-poppins text-[2.5rem]/[4.25rem] font-semibold text-white xs:text-5xl/[4.75rem]">
        Let’s try our service now!
      </h2>
      <p
        className={`mt-4 max-w-[30rem] font-poppins text-lg/[2rem] font-normal text-dimWhite`}
      >
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="ml-0 mt-10 sm:ml-10 sm:mt-0">
      <Button />
    </div>
  </section>
);

export default CTA;
