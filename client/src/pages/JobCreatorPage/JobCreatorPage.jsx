import React, { useState } from "react";
// import TextEditor from "../../components/TextEditor/TextEditor";
import Input from "../../components/Input/Input";
import "./JobCreatorPage.css";
import QuillEditor from "../../components/QuillEditor/QuillEditor";

const JobCreatorPage = () => {
  const [job, setJob] = useState({});
  const [content, setContent] = useState("");

  const onEditorChange = (value,) => {
    setContent(value);    
  };

  const onHandleInfo = (response) => {
    setInfo({ ...job, ...response });
  };

  

  const handleSubmitJob = () => {
    console.log("handleSubmitJob");
    setContent("");    
  };
  return (
    <div id="#editor-container" className="h-screen w-full mx-auto">
      <div className="job-form w-full h-full mx-auto py-8">
        <form
          className=" w-full sm:w-[60%] flex flex-col gap-6 h-full bg-white rounded-xl opacity-85 py-6 px-6 mx-auto"
          onSubmit={handleSubmitJob}
        >
          <div className="w-full flex flex-col gap-2">
            <h4 className="text-sm font-medium">Job Title</h4>
            <Input
              type="title"
              text="Senior Developer"
              inputName="title"
              required={true}
              value={job["title"]}
              onHandleInfo={onHandleInfo}
            />
          </div>
          <div className="w-full h-[24rem] max-h-[24rem] flex flex-col gap-2">
          <h4 className="text-sm font-medium">Job Description</h4>
          <QuillEditor
            placeholder={"Write detail..."}
            onEditorChange={onEditorChange}
          />
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobCreatorPage;
