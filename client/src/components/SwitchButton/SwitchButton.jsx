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
        className={`w-[33%] flex flex-row react-switch-label transition-all duration-500 ease-in-out`}
        htmlFor={`react-switch-new`}
      >
        <span
          className={`${
            isAvailable ? "p-4" : "pl-12"
          }  grow text-white transition-all duration-300 ease-in-out`}
        >
          {isAvailable ? "Yes" : "No"}
        </span>
        <span className={`react-switch-button`}></span>
      </label>
    </>
  );
};

export default SwitchButton;
