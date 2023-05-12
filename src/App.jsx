import "./index.css";
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero,
} from "./components";

const App = () => {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className="flex items-center justify-center px-6 sm:px-16">
        <div className="w-full xl:max-w-[1280px]">
          <Navbar />
        </div>
      </div>

      <div className="flex items-center justify-center bg-primary">
        <div className="w-full xl:max-w-[1280px]">
          <Hero />
        </div>
      </div>

      <div className="flex items-center justify-center bg-primary px-6 sm:px-16">
        <div className="w-full xl:max-w-[1280px]">
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
