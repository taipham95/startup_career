import React, { useState, useEffect } from "react";
import { dataServices } from "../../utils/dataService";
import "flowbite";

const Select = ({ props }) => {
  const [countries, setCountries] = useState([]);
  const [flagURL, setFlagURL] = useState("");
  const [flagAlt, setFlagAlt] = useState("");
  const [countryName, setCountryName] = useState("");
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(false);

  /* fetch all countries */
  const fetchData = async () => {
    const res = await dataServices.getData(
      "https://restcountries.com/v3.1/all"
    );
    setCountries(res);
    // get VN as default
    const init = res.find((country) => country.ccn3 == "704");
    setFlagURL(init.flags.png);
    setFlagAlt(init.flags.alt);
    setCountryName(init.name.common);
    setCode(init.idd.root + init.idd.suffixes);
  };
  
  const phoneCodes =
    countries.length &&
    countries.map((countryData, idx) => {
      const { png, alt } = countryData.flags;
      const { root, suffixes } = countryData.idd;
      return (
        <li
          key={idx}
          className="w-full flex flex-row gap-5 justify-between py-4 px-6 hover:bg-sky-200 hover:cursor-pointer focus:bg-slate-300"
          onClick={() => onHandleItemClick(idx)}
        >
          <div className="flex flex-row justify-items-stretch gap-3 w-2/3">
            <img
              src={png}
              alt={alt}
              className="w-[1.8rem] h-[1.15rem] rounded-[0.2rem]"
            ></img>
            <p className="truncate">{countryData.name.common}</p>
          </div>
          <p className="">{root}{suffixes}</p>
        </li>
      );
    });

  const onHandleDropdown =() => {
    setOpen(!open);
  }

  const onHandleItemClick = (val) => {
    setOpen(false);
    const selected = countries[val];
    const {flags, name, idd} = selected;
    // console.log((idd.suffixes).join(""));
    setFlagURL(flags.png);
    setFlagAlt(flags.alt);
    setCountryName(name.common);
    setCode(idd.root+(idd.suffixes).join(""));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <button
        id="dropdown-button"
        data-dropdown-toggle="dropdown-states"
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-800 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white rounded-l-lg hover:bg-sky-200 focus:outline-none focus:ring-transparent dark:focus:ring-transparent dark:bg-gray-600 dark:hover:bg-gray-700"
        type="button"
        onClick={() => onHandleDropdown()}
      >
        <div className="w-full flex flex-row justify-items-stretch gap-3">
          <img
            src={flagURL}
            alt={flagAlt}
            className="w-[1.8rem] h-[1.15rem] rounded-[0.2rem]"
          ></img>
          <p className="truncate">{countryName}</p>
          <p className="">
          {code}
        </p>
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
      </button>
      <div
        id="dropdown-states"
        class={`w-72 h-[20rem] py-4 overflow-y-auto overflow-x-hidden z-10 focus:outline-none outline-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 ${
          !open ? "hidden" : ""
        }`}
      >
        <ul
          class="py-0 text-sm font-light text-gray-700 dark:text-gray-200"
          aria-labelledby="states-button"
        >
          {phoneCodes}
        </ul>
      </div>
    </>
  );
};

export default Select;
