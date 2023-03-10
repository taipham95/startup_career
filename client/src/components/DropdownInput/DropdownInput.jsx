import React, { useState, useEffect } from "react";
import { dataServices } from "../../utils/dataService";
import "flowbite";
import Select from "../Select/Select";

const DropdownInput = ({ type, text, idInput, required, option }) => {
 /*  const [flagURL, setFlagURL] = useState("");
  const [flagAlt, setFlagAlt] = useState("");

  const fetchData = async () => {
    const res = await dataServices.getData(
      "https://restcountries.com/v3.1/alpha/vn"      
    );    
    console.log(res[0]);
    setFlagURL(res[0].flags.svg);
    setFlagAlt(res[0].flags.alt);
  };
    
  useEffect(() => {
    fetchData();
  }, []); */

  return (
    <div className="w-full flex">
      <label
        forhtml="search-dropdown"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Phone list
      </label>
      <Select/>
      {/* <button
        id="dropdown-button"
        data-dropdown-toggle="dropdown"
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        type="button"
      >
        <div className="flex flex-row gap-4">
          <img src={flagURL} alt={flagAlt} className="w-[2rem] rounded-[0.2rem]"></img>
          <span>+84</span>
        </div>
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button> */}
     
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
