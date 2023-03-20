import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";

import ApplyForm from "../../components/ApplyForm/ApplyForm";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import "./ApplyPage.css";

const ApplyPage = () => {
  return (
    <div className="apply-page box-border mx-auto w-full min-h-full flex flex-row flex-wrap align-middle">
      <HeroBanner />
      <div className="bg-transparent container md:px-14 mx-auto py-12 max-w-[90%] lg:max-w-[85%]">
        <div className="flex flex-row gap-1 items-center text-[#57627B] focus:text-gray-400 hover:text-sky-500">
          <FontAwesomeIcon icon={faAnglesLeft} size="xs" beat />
          <a
            href="/careers"
            className="uppercase text-left font-extrabold text-xs transition duration-150"
          >
            Back to Job Description
          </a>
        </div>

        <ApplyForm />
      </div>
    </div>
  );
};

export default ApplyPage;
