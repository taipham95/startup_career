import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PopupModal = (props) => {
  const [show, setShow] = useState(false);
  const { fileName } = props;
  fileName ? setShow(true) : setShow(false);
  const showAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Successful",
      text: `${fileName} uploaded`,
      allowOutsideClick: true,
      allowEscapeKey: true,
      showConfirmButton: false,
      timer: 2000,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  };

  useEffect(() => {
      showAlert();
  },[fileName]);

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className={`fixed z-[100] top-[9rem] left-0 right-0 p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:h-full ${
        fileName ? "" : "hidden"
      }`}
    >
      <div className="mx-auto max-w-lg md:h-auto">
        <div className="bg-sky-100 rounded-lg shadow dark:bg-gray-700">
          {/*  <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="popup-modal"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button> */}
          <div className="w-full flex flex-row justify-center items-center p-10 text-center">
            <p className="min-h-full h-fit text-center align-middle text-xs xs:text-sm md:text-base font-light text-rose-400">
              {fileName} <br />
              <span className="text-gray-500 dark:text-gray-400">
                uploaded!
              </span>
            </p>
            {/* <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              No, cancel
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
