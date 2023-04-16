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
        className={`${isAvailable ? "w-[50%]" :"w-[30%]" } flex flex-row react-switch-label transition-all duration-300`}
        htmlFor={`react-switch-new`}
      >
        <span className="p-4 grow text-white">{isAvailable && "Available"}</span>
        <span className={`react-switch-button`} ></span>
      </label>
    </>
  );
};

export default SwitchButton;
