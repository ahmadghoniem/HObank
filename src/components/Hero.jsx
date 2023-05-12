import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
const Hero = () => (
  <section id="home" className="flex flex-col py-6 sm:py-16 md:flex-row">
    <div className="flex flex-col items-start justify-center px-6 sm:px-16 xl:px-0">
      <div className="mb-2 flex flex-row items-center rounded-[10px] bg-[image:var(--discount-gradient)] px-4 py-[6px]">
        <img src={discount} alt="discount" className="h-8 w-8" />
        <p className="font-poppins text-base/[2rem] font-normal text-dimWhite">
          <span className="text-white">20%</span> Discount For
          <span className="text-white"> 1 Month</span> Account
        </p>
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <h1 className="font-poppins text-[52px]/[4rem] font-semibold text-white ss:text-7xl/[6rem] ">
          The Next <br className="hidden sm:block" />
          {/**  [background-image:var(--text-gradient)]
           * or you can “hint” the underlying type by adding a CSS data type before the value bg-[image:var(--text-gradient)]
           *  bg-clip-text text-transparent
           * text-transparent and -webkit-text-fill-color are the same, but -webkit-text-fill-color will take precedence over color if the two have different values.*/}
          <span className="bg-[image:var(--text-gradient)] bg-clip-text text-transparent">
            Generation
          </span>
        </h1>
        <div className="mr-0 hidden ss:flex md:mr-4">
          <GetStarted />
        </div>
      </div>
      <h1 className="w-full font-poppins text-[52px]/[4rem] font-semibold text-white ss:text-7xl/[5rem]">
        Payment Method
      </h1>
      <p className="max-[470px] mt-5 font-poppins text-lg/[2rem] font-normal text-dimWhite">
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, anual
        fees.
      </p>
    </div>
    <div className="relative my-10 flex flex-col items-center justify-center md:my-0">
      <img src={robot} alt="billing" className="z-20 h-full w-full" />
      <div className="absolute top-0 z-0 h-2/5 w-2/5 bg-gradient-to-r from-[#f4c4f3] to-[#fc67fa] blur-[60rem]" />
      <div className="absolute bottom-40 z-10 h-4/5 w-4/5 rounded-full bg-white/60 blur-[45rem]" />
      <div className="absolute bottom-20 right-20 z-30 h-1/2 w-1/2 bg-[image:var(--blue-gradient)] blur-[60rem]" />
    </div>
    <div className="flex items-center justify-center ss:hidden">
      <GetStarted />
    </div>
  </section>
);
export default Hero;
