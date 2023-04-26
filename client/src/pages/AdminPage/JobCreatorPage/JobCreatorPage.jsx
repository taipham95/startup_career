import React, { useState, useContext } from "react";
import { CareersContext } from "../../../Context/CareersContext";
import { dataService } from "../../../services/dataService";
import Swal from "sweetalert2";

import JobForm from "../../../components/JobForm/JobForm";

const JobCreatorPage = () => {
  /* const { onUpdateJobs } = useContext(CareersContext);
  const [jobTitle, setJobTittle] = useState("");
  const [available, setAvailable] = useState(true);
  const [workingTime, setWorkingTime] = useState("Fulltime");
  const [location, setLocation] = useState("");
  const [jobContent, setJobContent] = useState("");
  const [jobTag, setJobTag] = useState([]);
  const [workingType, setWorkingType] = useState([]);
  const [uploadErr, setUploadError] = useState(false);

  const showAlert = (mess) => {
    Swal.fire({
      icon: "success",
      title: "Successful",
      text: mess,
      allowOutsideClick: true,
      allowEscapeKey: true,
      showConfirmButton: false,
      timer: 1500,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  const onContentChange = (value) => {
    setJobContent(value);
  };

  const onJobTittleChange = (e) => {
    const { value } = e.target;
    setJobTittle(value);
  };

  const onLocationChange = (e) => {
    const { value } = e.target;
    setLocation(value);
  };

  const onRadioChange = (e) => {
    setWorkingTime(e.target.value);
  };

  const resetForm = () => {
    setJobTittle("");
    setJobContent("<p>&nbsp;</p>");
    setWorkingTime("Fulltime");
    setJobTag([]);
    setWorkingType([]);
    setLocation("");
  };

  const handleSubmitJob = async (e) => {
    e.preventDefault();
    const jobDetail = {
      title: jobTitle,
      location,
      type: workingTime,
      tags: [jobTag[0].value, workingType[0].value],
      available,
      content: jobContent,
    };

    try {
      await dataService.postJob(jobDetail);
      onUpdateJobs(jobDetail);
    } catch (err) {
      console.log(err);
      setUploadError(true);
    }
    if (!uploadErr) {
      resetForm();
      showAlert("New job created successfully!");
    }
  }; */

  return <JobForm />;
};

export default JobCreatorPage;
