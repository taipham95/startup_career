import React from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";

const ApplyForm = () => {
  return (
    <form className="pt-6 w-full">
      <div className="w-full flex flex-col gap-4">
        <div className="w-full flex flex-wrap gap-6">
          <Input text="First Name" id="firstName" required={true} />
          <Input text="Last Name" id="lastName" required={true} />
        </div>
        <Input text="Email" id="email" required={true} />
        <Input text="Headline" id="headline" required={false} option="OPTION" />
        <div className="w-full flex flex-row">
        <Select/>
        <Input text="Phone" id="phone" required={false} customClass="rounded-l-none" />
        </div>
        
      </div>
    </form>
  );
};

export default ApplyForm;
