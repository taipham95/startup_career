import React, {useState}from "react";

const FileInput = (props) => {
  const [inputs, setInputs] = useState({});
  const {type, inputName, value, onHandleInput} = props;
  const onHandleChange = (e) => {
    console.log(e);
    const {value} = e.target;
    console.log("files: ", value);
    /* setInputs({[name]: value});
    onHandleInput({[name]: value}); */
  };
  return (
    <div class="flex items-center justify-center w-full">
      <label
        forhtml="dropzone-file"
        class="flex flex-col items-center justify-center w-full h-24 border-[1px] border-gray-300 border-dashed rounded-2xl cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div class="flex flex-col items-center justify-center px-4 pt-5 pb-6">
          {/* <svg
            aria-hidden="true"
            class="w-10 h-10 mb-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg> */}
          <p class="mb-2 text-base font-light">
            <span class="font-normal text-sky-400">Upload a file&nbsp;</span><span className="text-gray-500 dark:text-gray-400">or drag and drop here</span>
          </p>
        </div>
        <input id="dropzone-file" type={type} className="hidden"        
        name={inputName} value={value || ""} onChange={onHandleChange} />
      </label>
    </div>
  );
};

export default FileInput;
