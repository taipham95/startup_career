import React from "react";
import DropdownInput from "../DropdownInput/DropdownInput";
import Input from "../Input/Input";
import Select from "../Select/Select";

const ApplyForm = () => {
  const handleSubmit = () => {}

  return (
    <form className="pt-6 w-full" onSubmit={handleSubmit()}>
      <div className="w-full flex flex-col gap-6">
        <div className="w-full flex flex-wrap gap-6">
          <Input type="text" text="First Name" id="firstName" required={true} />
          <Input type="text" text="Last Name" id="lastName" required={true} />
        </div>
        <Input type="email" text="Email" id="email" required={true} />
        <Input type="text" text="Headline" id="headline" required={false} option="OPTION" />
        <div className="w-full flex flex-row">
        {/* <Select/>
        <Input type="tel" text="Phone" id="phone" required={false} /> */}
        <DropdownInput type="tel" text="Phone" id="phone" required={true} />
        </div>        
        <button type="button" class="min-w-fit w-fit mx-auto mt-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-3xl text-base px-5 py-3 text-center">Submit application</button>
      </div>      
    </form>
  );
};

export default ApplyForm;
