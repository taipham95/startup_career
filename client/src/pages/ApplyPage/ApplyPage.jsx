import React from "react";
import ApplyForm from "../../components/ApplyForm/ApplyForm";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

const ApplyPage = () => {
  return (
    <div className="apply-page box-border mx-auto w-full min-h-full flex flex-row flex-wrap align-middle">
      <HeroBanner />
      <div className="bg-white container md:px-20 mx-auto py-12 max-w-[80%] lg:max-w-[60%]">
        <a href="#" className="uppercase text-left font-extrabold text-xs text-[#57627B] focus:text-primary-300 hover:text-primary-500">Back to Job Description</a>
        <div className="flex flex-row border-b border-spacing-6 border-slate-300 py-5">
          <h4 className="text-xl md:text-2xl font-bold text-left grow">
            Personal Info
          </h4>
          <button
            type="button"
            className="w-[6rem] md:w-[10rem] inline-block text-right font-normal text-primary transition duration-150 ease-in-out hover:text-gray-400 focus:text-gray-500 focus:outline-none focus:ring-0 active:text-primary-700"
          >
            Clear
          </button>
        </div>
        <ApplyForm/>
      </div>
    </div>
  );
};

export default ApplyPage;
