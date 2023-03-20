import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { useParams, Link } from "react-router-dom";

import ApplyForm from "../../components/ApplyForm/ApplyForm";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import "./ApplyPage.css";

const ApplyPage = () => {
  const param = useParams()
  const jobList = [
    {
        id:1,
        title: "DevOps Engineer",
        descriptions: "VietNam , Ho Chi Minh City - Full-time",
        position: "Engineer"
    },
    {
        id:2,
        title: "QA Engineer",
        descriptions: "VietNam , Ho Chi Minh City - Full-time",
        position: "Engineer"
    },
    {
        id:3,
        title: "Senior Game Engineer",
        descriptions: "VietNam , Ho Chi Minh City - Full-time",
        position: "Engineer"
    },
    {
        id:4,
        title: "Product Designer",
        descriptions: "VietNam , Ho Chi Minh City - Full-time",
        position: "Engineer"
    },
    {
        id:5,
        title: "Senior Analytics Engineer",
        descriptions: "VietNam , Ho Chi Minh City - Full-time",
        position: "Engineer"
    },
    {
        id:6,
        title: "Growth Data Analyst (APAC Remote/HCMC, relocation support available)",
        descriptions: "VietNam , Ho Chi Minh City - Full-time",
        position: "Engineer"
    },
    {
        id:7,
        title: "Social Media Specialist",
        descriptions: "United States , Michigan Center - Full-time",
        position: "Growth"
    },
    {
        id:8,
        title: "Marketing Creative Manager",
        descriptions: "VietNam , Ho Chi Minh City - Full-time",
        position: "Growth"
    }
]
  const joblist2 = jobList.find(item => item.id == param.id)

  return (
    <div className="apply-page box-border mx-auto w-full min-h-full flex flex-row flex-wrap align-middle">
      <HeroBanner title={joblist2.title} descriptions={joblist2.descriptions} position={joblist2.position} />
      <div className="bg-transparent container md:px-20 mx-auto py-12 max-w-[80%] lg:max-w-[60%]">
        <div className="flex flex-row gap-1 items-center text-[#57627B] focus:text-gray-400 hover:text-sky-500">
          <FontAwesomeIcon icon={faAnglesLeft} size="xs" beat />
         <Link to={`/careers/${param.id}`}> <a
            
            className="uppercase text-left font-extrabold text-xs transition duration-150"
          >
            Back to Job Description
          </a></Link>
        </div>

        <ApplyForm />
      </div>
    </div>
  );
};

export default ApplyPage;
