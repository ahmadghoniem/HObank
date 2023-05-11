import classNames from "classnames";
const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={classNames(
        "rounded-lg bg-[image:var(--button-gradient)] px-8 py-4 font-poppins text-lg font-medium text-primary outline-none",
        styles
      )}
    >
      Get Started
    </button>
  );
};

export default Button;
