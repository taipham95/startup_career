import React, { useState } from "react";
import "./JobCreatorPage.css";
import QuillEditor from "../../../components/QuillEditor/QuillEditor";
import { jobTags, workingTypes } from "../../../constants";
import { MultiSelect } from "react-multi-select-component";
import { dataServices } from "../../../services/dataService";
import Swal from "sweetalert2";

import SwitchButton from "../../../components/SwitchButton/SwitchButton";

const JobCreatorPage = () => {
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
    console.log("jobDetail created: ", jobDetail);

    try {
      await dataServices.postJob(jobDetail);
    } catch (err) {
      console.log(err);
      setUploadError(true);
    }
    if (!uploadErr) {
      showAlert("Submit successfully!");
    }

    // showAlert("New job created successfully!");
    setJobTittle("");
    setJobContent("");
    setWorkingTime("Fulltime");
    setJobTagSelected([]);
    setWorkingSelected([]);
    setLocation("");
  };

  return (
    <div id="#editor-container" className="h-screen w-full mx-auto">
      <div className="job-form w-full h-full mx-auto">
        <form
          className="w-full flex flex-col gap-6 h-full bg-white px-4 md:px-6 py-4 mx-auto"
          onSubmit={handleSubmitJob}
        >
          <div className="w-full flex flex-row flex-wrap">
            <div className="w-full flex flex-col grow-0 sm:grow gap-2">
              <h4 className="text-sm font-medium">Job Title</h4>
              <div className="flex grow font-light text-xs md:text-sm">
                <input
                  type="tittle"
                  text={jobTitle}
                  id="tittle"
                  name="tittle"
                  required="true"
                  autoComplete="off"
                  className={`peer w-[90%] md:w-[80%] lg:w-[50%] min-h-[auto] text-xs md:text-sm rounded-lg border bg-white py-3 px-3 leading-[1.6] placeholder-gray-500 focus:placeholder-transparent placeholder:text-xs md:placeholder:text-sm outline-none transition-all duration-200 ease-linear motion-reduce:transition-none focus:outline-none focus:shadow-none focus:ring-transparent dark:focus:border-rose-500 focus:border-rose-500"}`}
                  value={jobTitle || ""}
                  placeholder="Senior Developer"
                  onChange={onJobTittleChange}
                />
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row flex-wrap gap-6 md:gap-12 items-start">
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-medium">Job Available</h4>
              <div className="flex flex-row font-light text-xs md:text-sm">
                <SwitchButton
                  isAvailable={available}
                  handleSwitch={() => setAvailable(!available)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-medium">Working Time</h4>
              <div className="flex flex-row font-light text-xs md:text-sm gap-5">
                <div>
                  <input
                    className="outline-none focus:outline-none bg-gray-300 hover:bg-gray-300 cursor-pointer ring-transparent checked:ring-transparent transition-all duration-200 checked:bg-[#00bbff] checked:hover:checked:bg-[#00bbff]"
                    type="radio"
                    value="Fulltime"
                    checked={workingTime === "Fulltime"}
                    onChange={onRadioChange}
                  />
                  <span className="pl-2">Full-Time</span>
                </div>
                <div>
                  <input
                    className="outline-none focus:outline-none bg-gray-300hover:bg-gray-300 cursor-pointer ring-transparent checked:ring-transparent transition-all duration-200 checked:bg-[#00bbff] checked:hover:checked:bg-[#00bbff]"
                    type="radio"
                    value="Parttime"
                    checked={workingTime === "Parttime"}
                    onChange={onRadioChange}
                  />
                  <span className="pl-2">Part-Time</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full flex flex-col gap-2 grow">
            <h4 className="text-sm font-medium">Job Detail</h4>
            <QuillEditor
              value={jobContent}
              placeholder={"Write description and requirement of jobs..."}
              onEditorChange={onContentChange}
            />
          </div>

          <div className="w-full flex flex-row flex-wrap lg:flex-nowrap gap-6 lg:gap-10">
            <div className="w-full md:w-[48%] flex flex-col gap-2 text-xs md:text-sm">
              <h4 className="text-sm font-medium">Job title tag</h4>
              <MultiSelect
                options={jobTags}
                value={jobTag}
                onChange={setJobTag}
                labelledBy="Select"
              />
            </div>
            <div className="w-full md:w-[48%] flex flex-col gap-2 text-xs md:text-sm">
              <h4 className="text-sm font-medium">Working type tag</h4>
              <MultiSelect
                options={workingTypes}
                value={workingType}
                onChange={setWorkingType}
                labelledBy="Select"
              />
            </div>
            <div className="w-full md:w-[48%] flex flex-col gap-2 text-xs md:text-sm">
              <h4 className="text-sm font-medium">Job Location</h4>
              <div className="relative grow font-light text-xs md:text-sm">
                <input
                  type="location"
                  text={location}
                  id="location"
                  name="location"
                  required="true"
                  autoComplete="off"
                  className={`peer w-full min-h-[auto] text-xs md:text-sm rounded-lg border bg-white py-3 px-3 leading-[1.6] placeholder-gray-500 focus:placeholder-transparent placeholder:text-xs md:placeholder:text-sm outline-none transition-all duration-200 ease-linear motion-reduce:transition-none focus:outline-none focus:shadow-none focus:ring-transparent dark:focus:border-rose-500 focus:border-rose-500"}`}
                  value={location || ""}
                  placeholder="TP Ho Chi Minh"
                  onChange={onLocationChange}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="min-w-fit w-fit mx-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-base px-5 py-3 text-center"
          >
            Save job
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobCreatorPage;
