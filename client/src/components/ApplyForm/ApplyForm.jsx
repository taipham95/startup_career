import React, {useState, useEffect} from "react";
import DropdownInput from "../DropdownInput/DropdownInput";
import FileInput from "../FileInput/FileInput";
import Input from "../Input/Input";

const ApplyForm = () => {
  const [info, setInfo] = useState({});

  const onHandleInput = (response) => {
   const {name, value} = response;
    // using destructuring or rest operator
    // setInfo({...info, [name]:value});
    setInfo({...info, ...response});
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onHandleClear = (e) => {
    e.preventDefault();
    setInfo({});
  };

  return (
    <form className="pt-6 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-row">
        <h4 className="text-xl md:text-2xl font-bold text-left grow">
          Personal Info
        </h4>
        <button
          type="button"
          className="clear-btn w-[6rem] md:w-[10rem] inline-block text-right font-normal text-primary transition duration-150 ease-in-out hover:text-sky-400 focus:text-gray-500 focus:outline-none focus:ring-0 active:text-primary-700"
          onClick={(e) => onHandleClear(e)}
        >
          Clear
        </button>
      </div>
      <hr class="w-full h-px mt-4 mb-10 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-wrap gap-6">
          <Input type="text" text="First Name" inputName="firstName" required={true} value={info["firstName"]} onHandleInput={onHandleInput}/>
          <Input type="text" text="Last Name" inputName="lastName" required={true} value={info["lastName"]} onHandleInput={onHandleInput}/>
        </div>
        <Input type="email" text="Email" inputName="email" required={true} value={info["email"]} onHandleInput={onHandleInput}/>
        <Input
          type="text"
          text="Headline"
          inputName="headline"
          required={false}
          value={info["headline"]}
          onHandleInput={onHandleInput}
          option="OPTION"
        />
        <DropdownInput type="tel" text="Phone" inputName="phone" required={true} value={info["phone"]} onHandleInput={onHandleInput}/>
        <Input
          type="text"
          text="Address"
          inputName="address"
          required={false}
          value={info["address"]}
          onHandleInput={onHandleInput}
          option="OPTION"
        />

        {/* Profile */}
        <div className="w-full pt-6">
          <div className="flex flex-row">
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
          <hr class="w-full h-px mt-4 mb-10 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="flex flex-wrap justify-between items-center pb-4">
            <p class="uppercase text-[0.65rem] font-extrabold text-gray-900 dark:text-white">
              Education
              <span className="text-gray-400 font-semibold">
                &nbsp;(Option)
              </span>
            </p>
            <button
              type="button"
              class="text-white bg-sky-500 hover:bg-sky-600 focus:bg-gray-400 focus:outline-none focus:ring-transparent font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-sky-300 dark:hover:bg-sky-500 transition duration-150"
            >
              + Add
            </button>
          </div>
          <div className="flex flex-wrap justify-between items-center pb-4">
            <p class="uppercase text-[0.65rem] font-extrabold text-gray-900 dark:text-white">
              Experiences
              <span className="text-gray-400 font-semibold">
                &nbsp;(Option)
              </span>
            </p>
            <button
              type="button"
              class="text-white bg-sky-500 hover:bg-sky-600 focus:bg-gray-400 focus:outline-none focus:ring-transparent font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-sky-300 dark:hover:bg-sky-500 transition duration-150"
            >
              + Add
            </button>
          </div>
          <FileInput type="file" text="file" inputName="fileUpload" value={info["fileUpload"]} onHandleInput={onHandleInput}/>
        </div>

        {/* Detail */}
        <div className="w-full pt-6 relative">
          <div className="flex flex-row">
            <h4 className="text-xl md:text-2xl font-bold text-left grow">
              Detail
            </h4>
            <button
              type="button"
              className="clear-btn w-[6rem] md:w-[10rem] inline-block text-right font-normal text-primary transition duration-150 ease-in-out hover:text-sky-400 focus:text-gray-500 focus:outline-none focus:ring-0 active:text-primary-700"
            >
              Clear
            </button>
          </div>
          <hr class="w-full h-px mt-4 mb-10 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <label
            for="coverLetter"
            class="block uppercase mb-2 text-[0.65rem] font-extrabold text-gray-900 dark:text-white"
          >
            Cover letter
            <span className="text-gray-400 font-semibold">&nbsp;(Option)</span>
          </label>
          <textarea
            name="coverLetter"
            rows="6"
            class="block p-3 w-full text-sm text-gray-900 font-light bg-white rounded-2xl border-[1px] border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write something about you here..."
          ></textarea>
          <div className="absolute -z-5 max-w-[12rem] w-[12rem] top-[17.5rem] -left-[3.5rem] md:max-w-[14rem] md:w-[14rem] md:top-[16rem] md:-left-[12rem] lg:max-w-[17rem] lg:w-[17rem] lg:top-[13rem] lg:-left-[15.5rem] ">
            <img src="/MessyDoodle.png" />
          </div>
        </div>

        <button
          type="button"
          class="min-w-fit z-10 w-fit mx-auto mt-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-base px-5 py-3 text-center"
        >
          Submit application
        </button>
      </div>
    </form>
  );
};

export default ApplyForm;
