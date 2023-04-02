import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { storage } from "../../services/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FileInput = (props) => {
  const [formId, setFormId] = useState(23); //formId is id's candidate was created when candidate submit
  const [file, setFile] = useState({});
  const [fileName, setFileName] = useState("");
  const {inputName, onHandleProfile} = props;  
  const [uploaded, setUploaded] = useState(false);
  const onHandleChange = (e) => {
    setFile(e.target.files);    
  };

  const showAlert = (mess) => {
    Swal.fire({
      icon: "success",
      title: "Successful",
      text: `${mess} uploaded`,
      allowOutsideClick: true,
      allowEscapeKey: true,
      showConfirmButton: false,
      timer: 1500,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    });
  };

  // Function for upload file
  useEffect(() => {
    if (Object.keys(file).length !== 0) {
      const metadata = { contentType: file[0].type };
      const storageRef = ref(storage, `${formId}/${file[0].name}`);
      uploadBytes(storageRef, file[0], metadata).then((snapshot) => {
        setFileName(file[0].name);
        onHandleProfile({"fileName": file[0].name});
        setUploaded(true);
        getDownloadURL(ref(storage, `${formId}/${file[0].name}`)).then(
          (url) => {          
            showAlert(file[0].name);  
            // onHandleProfile({...{"fileName": file[0].name}, ... {[inputName]: url}});            
            onHandleProfile({... {[inputName]: url}});            
          }
        );
      });
      setFile({});
    }
  }, [file, formId]);
  return (
    <div className="flex items-center justify-center w-full">
      <label
        forhtml="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-24 border-[1px] border-gray-300 border-dashed rounded-2xl cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="w-full mx-auto flex flex-col items-center justify-center px-4 pt-5 pb-6">
          <p className={`mb-2 text-center text-sm md:text-base font-light text-sky-400`}>
            <span className="font-normal text-sky-400">Upload a file&nbsp;</span><br/>
            <span className="text-gray-500 dark:text-gray-400">
              or drag and drop here
            </span>
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          required={true}
          className="hidden"
          onChange={onHandleChange}
        />
        
      </label>
    </div>
  );
};

export default FileInput;
