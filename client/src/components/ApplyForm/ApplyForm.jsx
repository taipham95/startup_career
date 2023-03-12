import React from "react";
import DropdownInput from "../DropdownInput/DropdownInput";
import Input from "../Input/Input";
import Select from "../Select/Select";

const ApplyForm = () => {
  const handleSubmit = () => {};

  return (
    <form className="pt-6 w-full" onSubmit={handleSubmit()}>
      <div className="flex flex-row border-b border-spacing-6 border-slate-300 py-5">
        <h4 className="text-xl md:text-2xl font-bold text-left grow">
          Personal Info
        </h4>
        <button
          type="button"
          className="clear-btn w-[6rem] md:w-[10rem] inline-block text-right font-normal text-primary transition duration-150 ease-in-out hover:text-sky-400 focus:text-gray-500 focus:outline-none focus:ring-0 active:text-primary-700"
        >
          Clear
        </button>
      </div>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-wrap gap-6">
          <Input type="text" text="First Name" id="firstName" required={true} />
          <Input type="text" text="Last Name" id="lastName" required={true} />
        </div>
        <Input type="email" text="Email" id="email" required={true} />
        <Input
          type="text"
          text="Headline"
          id="headline"
          required={false}
          option="OPTION"
        />
        <DropdownInput type="tel" text="Phone" id="phone" required={true} />
        <Input
          type="text"
          text="Address"
          id="address"
          required={false}
          option="OPTION"
        />

        {/* Profile */}
        <div className="flex flex-row border-b border-spacing-6 border-slate-300 py-5">
          <h4 className="text-xl md:text-2xl font-bold text-left grow">
            Profile
          </h4>
          <button
            type="button"
            className="clear-btn w-[6rem] md:w-[10rem] inline-block text-right font-normal text-primary transition duration-150 ease-in-out hover:text-sky-400 focus:text-gray-500 focus:outline-none focus:ring-0 active:text-primary-700"
          >
            Clear
          </button>
        </div>
        <button
          type="button"
          class="min-w-fit w-fit mx-auto mt-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-base px-5 py-3 text-center"
        >
          Submit application
        </button>
      </div>
    </form>
  );
};

export default ApplyForm;
