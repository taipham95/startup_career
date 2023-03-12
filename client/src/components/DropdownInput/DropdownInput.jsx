import React, { useState, useEffect } from "react";
import { dataServices } from "../../utils/dataService";
import "flowbite";
import Select from "../Select/Select";

const DropdownInput = ({ type, text, idInput, required, option }) => {
  return (
    <div className="w-full flex mb-3">
      <label
        forhtml="search-dropdown"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Phone list
      </label>
      <Select/>
     
      <div className="relative w-full font-light ">
        <input
          type={type}
          required={required}
          className={`peer w-full block p-2.5 z-20 min-h-[auto] rounded-lg border rounded-r-lg rounded-l-none bg-white py-[0.5rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none focus:outline-none focus:shadow-none focus:ring-transparent ${
            required
              ? "dark:focus:border-rose-500 focus:border-rose-500"
              : "dark:focus:border-sky-300 focus:border-sky-300"
          }`}
          id={idInput}
        />
        {required ? (
          <span className="text-xs md:text-sm absolute bottom-[-1.5rem] left-0 opacity-0 p-0 m-0 peer-focus:opacity-100 peer-focus:text-red-500">
            This field is required
          </span>
        ) : (
          ""
        )}
        <label
          forhtml={idInput}
          className={`pointer-events-none bg-transparent absolute h-full top-0 left-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.65rem] px-3 leading-[1.6] text-neutral-400 transition-all duration-200 ease-out peer-focus:-translate-y-[1.25rem] 
        peer-focus:scale-[0.9] peer-focus:left-4 peer-focus:bg-white motion-reduce:transition-none dark:text-neutral-300  ${
          required
            ? "dark:peer-focus:text-red-500 peer-focus:text-red-500"
            : "dark:peer-focus:text-sky-500 peer-focus:text-sky-500"
        }`}
        >
          {option ? `${text} (${option})` : text}
        </label>
      </div>
    </div>
  );
};

export default DropdownInput;
