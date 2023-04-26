import React, { useState, useContext, useEffect } from "react";
import { useParams} from "react-router-dom";
import { CareersContext } from "../../../Context/CareersContext";
import "../../../components/JobForm/JobForm.css";
import JobForm from "../../../components/JobForm/JobForm";

const UpdateJobPage = () => {
  const param = useParams();

  const jobId = param.id;
  // context
  const {jobsData, onUpdateJobs} = useContext(CareersContext);
  const jobDetail =
    jobsData.length > 0 && jobsData.find((job) => job._id == jobId);

  return (
    <JobForm jobDetail={jobDetail} jobId={jobId}/>
  );
};

export default UpdateJobPage;
