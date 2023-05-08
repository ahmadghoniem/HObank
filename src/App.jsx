import "./index.css";
import styles from "./style";
const App = () => {
  return (
    <div className="w-full overflow-hidden bg-primary">
      <div className="flex items-center justify-center px-6 sm:px-16">
        <div className="w-full xl:max-w-[1280px]">Navbar</div>
      </div>

      <div className="flex items-center justify-center bg-primary">
        <div className="w-full xl:max-w-[1280px]">hero </div>
      </div>

      <div className="flex items-center justify-center bg-primary">
        <div className="w-full xl:max-w-[1280px]">
          Stats buessiness billing carddeal testimonials clients cta footer
        </div>
      </div>
    </div>
  );
};

export default App;
