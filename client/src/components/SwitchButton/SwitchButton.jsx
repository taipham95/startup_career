import React from "react";
import "./SwitchButton.css";

const SwitchButton = (props) => {
  const { isAvailable, handleSwitch } = props;
  return (
    <>
      <input
        checked={isAvailable}
        onChange={handleSwitch}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isAvailable && "#4c98ff" }}
        className={`w-[18%] min-w-[8rem] sm:min-w-[4rem] sm:w-[45%] flex flex-row react-switch-label transition-all duration-500 ease-in-out text-sm md:text-sm`}
        htmlFor={`react-switch-new`}
      >
        <span
          className={`${
            isAvailable ? "p-6 sm:p-4" : "pl-12"
          } text-white transition-all duration-300 ease-in-out`}
        >
          {isAvailable ? "Yes" : "No"}
        </span>
        <span className={`react-switch-button`}></span>
      </label>
    </>
  );
};

export default SwitchButton;
