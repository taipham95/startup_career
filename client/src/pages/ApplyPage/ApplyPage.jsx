import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft} from '@fortawesome/free-solid-svg-icons';

import ApplyForm from "../../components/ApplyForm/ApplyForm";
import HeroBanner from "../../components/HeroBanner/HeroBanner";

const ApplyPage = () => {
  return (
    <div className="apply-page box-border mx-auto w-full min-h-full flex flex-row flex-wrap align-middle">
      <HeroBanner />
      <div className="bg-white container md:px-20 mx-auto py-12 max-w-[80%] lg:max-w-[60%]">
        <div className="flex flex-row gap-1 items-center text-[#57627B] focus:text-gray-400 hover:text-sky-500">
        <FontAwesomeIcon icon={faAnglesLeft} size="xs" beat />
        <a href="#" className="uppercase text-left font-extrabold text-xs  ">Back to Job Description</a>
        </div>
        
        <ApplyForm/>
      </div>
    </div>
  );
};

export default ApplyPage;
