import React, { useState, useEffect } from "react";
import DropdownInput from "../DropdownInput/DropdownInput";
import FileInput from "../FileInput/FileInput";
import Input from "../Input/Input";
import ProfileInput from "../Input/ProfileInput";

const ApplyForm = () => {
  const [info, setInfo] = useState({});
  const [profile, setProfile] = useState({});
  const [showEducation, setShowEducation] = useState(false);
  const [showExp, setShowExp] = useState(false);

  const onHandleInput = (response) => {
    const { name, value } = response;
    // using destructuring or rest operator
    // setInfo({...info, [name]:value});
    setInfo({ ...info, ...response });
    setProfile({ ...info, ...response });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onShowEducation = () => {
    setShowEducation(!showEducation);
  };

  const onShowExperience = () => {
    setShowExp(!showExp);
  };

  const onHandleClearInfo = (e) => {
    e.preventDefault();
    setInfo({});
  };

  const onHandleClearProfile = (e) => {
    e.preventDefault();
    setProfile({});
  };

  return (
    <form className="pt-6 w-full" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full px-4 flex flex-col">
          <div className="flex flex-row">
            <h4 className="text-xl md:text-2xl font-bold text-left grow">
              Personal Info
            </h4>
            <button
              type="button"
              className="clear-btn w-[6rem] md:w-[10rem] inline-block text-right font-normal text-sky-400 transition duration-150 ease-in-out hover:text-sky-700 focus:text-gray-500 focus:outline-none focus:ring-0 active:text-primary-700"
              onClick={(e) => onHandleClearInfo(e)}
            >
              Clear
            </button>
          </div>
          <hr className="w-full h-px mt-4 mb-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="w-full flex flex-wrap gap-9">
            <div className="w-full flex flex-wrap gap-6">
              <Input
                type="text"
                text="First Name"
                inputName="firstName"
                required={true}
                value={info["firstName"]}
                onHandleInput={onHandleInput}
              />
              <Input
                type="text"
                text="Last Name"
                inputName="lastName"
                required={true}
                value={info["lastName"]}
                onHandleInput={onHandleInput}
              />
            </div>
            <Input
              type="email"
              text="Email"
              inputName="email"
              required={true}
              value={info["email"]}
              onHandleInput={onHandleInput}
            />
            <Input
              type="text"
              text="Headline"
              inputName="headline"
              required={false}
              value={info["headline"]}
              onHandleInput={onHandleInput}
              option="OPTION"
            />
            <DropdownInput
              type="tel"
              text="Phone"
              inputName="phone"
              required={true}
              value={info["phone"]}
              onHandleInput={onHandleInput}
            />
            <Input
              type="text"
              text="Address"
              inputName="address"
              required={false}
              value={info["address"]}
              onHandleInput={onHandleInput}
              option="OPTION"
            />
          </div>
        </div>

        {/* Profile */}
        <div className="flex flex-col px-4 pt-8">
          <div className="flex flex-row">
            <h4 className="text-xl md:text-2xl font-bold text-left grow">
              Profile
            </h4>
            <button
              type="button"
              className="clear-btn w-[6rem] md:w-[10rem] inline-block text-right font-normal text-sky-400 transition duration-150 ease-in-out hover:text-sky-700 focus:text-gray-500 focus:outline-none focus:ring-0 active:text-primary-700"
              onClick={(e) => onHandleClearProfile(e)}
            >
              Clear
            </button>
          </div>
          <hr className="w-full h-px mt-4 mb-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="flex flex-wrap justify-between items-center py-4">
            <p className="uppercase text-[0.65rem] font-extrabold text-gray-900 dark:text-white">
              Education
              <span className="text-gray-400 font-semibold">
                &nbsp;(Option)
              </span>
            </p>
            <button
              type="button"
              className="text-white bg-sky-500 hover:bg-sky-600 focus:bg-gray-400 focus:outline-none focus:ring-transparent font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-sky-300 dark:hover:bg-sky-500 transition duration-150"
              onClick={() => onShowEducation()}
            >
              + Add
            </button>
          </div>
        </div>
        <div className="w-full -mt-3">
          <div className="flex flex-col gap-6">
            <div
              className={`${
                !showEducation ? "hidden" : "block"
              } bg-slate-100 rounded-2xl py-8 px-4 flex flex-col gap-9 justify-items-stretch`}
            >
              <ProfileInput
                type="text"
                text="School"
                inputName="school"
                required={true}
                value={profile["school"]}
                onHandleInput={onHandleInput}
                option=""
              />
              <ProfileInput
                type="text"
                text="Field of study"
                inputName="fieldOfStudy"
                required={false}
                value={info["fieldOfStudy"]}
                onHandleInput={onHandleInput}
                option="OPTION"
              />
              <ProfileInput
                type="text"
                text="Degree"
                inputName="degree"
                required={false}
                value={profile["degree"]}
                onHandleInput={onHandleInput}
                option="OPTION"
              />
            </div>
          </div>
          <div className="flex flex-col px-4 justify-center">
            <div className="flex flex-wrap justify-between items-center py-4">
              <p className="uppercase text-[0.65rem] font-extrabold text-gray-900 dark:text-white">
                Experiences
                <span className="text-gray-400 font-semibold">
                  &nbsp;(Option)
                </span>
              </p>
              <button
                type="button"
                className="text-white bg-sky-500 hover:bg-sky-600 focus:bg-gray-400 focus:outline-none focus:ring-transparent font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-sky-300 dark:hover:bg-sky-500 transition duration-150"
                onClick={() => onShowExperience()}
              >
                + Add
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div
              className={`${
                !showExp ? "hidden" : "block"
              } bg-slate-100 rounded-2xl py-8 px-4 flex flex-col gap-9 justify-items-stretch`}
            >
              <ProfileInput
                type="text"
                text="Title"
                inputName="title"
                required={true}
                value={profile["title"]}
                onHandleInput={onHandleInput}
                option=""
              />
              <ProfileInput
                type="text"
                text="Company"
                inputName="company"
                required={false}
                value={profile["company"]}
                onHandleInput={onHandleInput}
                option="OPTION"
              />
              <ProfileInput
                type="text"
                text="Industry"
                inputName="industry"
                required={false}
                value={profile["industry"]}
                onHandleInput={onHandleInput}
                option="OPTION"
              />
              
              <div className="relative font-light text-sm">
              <textarea
                name="summary"
                id="summary"
                rows="6"
                className="peer p-3 w-full text-sm text-gray-900 font-light bg-slate-100 focus:placeholder-transparent placeholder:text-sm rounded-2xl border-[1px] border-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Summary"
              ></textarea>
              <label forhtml="sumary"
                className="opacity-0 peer-focus:opacity-100 absolute h-auto top-0 left-2 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.65rem] px-3 leading-[1.6] text-gray-900 dark:peer-focus:text-sky-500 dark:text-neutral-300 peer-focus:text-sky-500 transition-all duration-200 ease-out peer-focus:bg-slate-100 peer-focus:-translate-y-[1.25rem] peer-focus:left-4 peer-focus:scale-[0.9]"
              >
                Summary<span className="uppercase">&nbsp;(Option)</span>
              </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col py-6 px-4 gap-4">
            <p className="uppercase text-[0.65rem] font-extrabold text-gray-900 dark:text-white">
              resume
              <span className="text-red-400 font-semibold">
                &nbsp;(Required)
              </span>
            </p>
            <FileInput
              type="file"
              text="file"
              inputName="fileUpload"
              value={info["fileUpload"]}
              onHandleInput={onHandleInput}
            />
          </div>
        </div>

        {/* Detail */}
        <div className="w-full relative px-4">
          <div className="flex flex-row">
            <h4 className="text-xl md:text-2xl font-bold text-left grow">
              Detail
            </h4>
            <button
              type="button"
              className="clear-btn w-[6rem] md:w-[10rem] inline-block text-right font-normal text-sky-400 transition duration-150 ease-in-out hover:text-sky-700 focus:text-gray-500 focus:outline-none focus:ring-0 active:text-primary-700"
            >
              Clear
            </button>
          </div>
          <hr className="w-full h-px mt-4 mb-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <label
            forhtml="coverLetter"
            className="block uppercase mb-2 text-[0.65rem] font-extrabold text-gray-900 dark:text-white"
          >
            Cover letter
            <span className="text-gray-400 font-semibold">&nbsp;(Option)</span>
          </label>
          <textarea
            name="coverLetter"
            rows="6"
            className="block p-3 w-full text-sm text-gray-900 font-light bg-white rounded-2xl border-[1px] border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write something about you here..."
          ></textarea>
          <div className="absolute -z-5 max-w-[12rem] w-[12rem] top-[17.5rem] -left-[3.5rem] md:max-w-[14rem] md:w-[14rem] md:top-[16rem] md:-left-[12rem] lg:max-w-[17rem] lg:w-[17rem] lg:top-[13rem] lg:-left-[15.5rem] ">
            <img src="/MessyDoodle.png" />
          </div>
        </div>

        <button
          type="button"
          className="min-w-fit z-10 w-fit mx-auto mt-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-base px-5 py-3 text-center"
        >
          Submit application
        </button>
      </div>
    </form>
  );
};

export default ApplyForm;
