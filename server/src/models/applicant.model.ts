import mongoose, { Schema } from "mongoose";
// Variable declaration
export interface IApplicant {
<<<<<<< HEAD
    personal: {
      firstName: String;
      lastName: String;
      email: String;
      headline: String;
      phone: String;
      address: String;
    };
    education: {
      school: String;
      foStudy: String;
      degree: String;
      sDate: String;
      eDate: String;
    };
    experience: {
      title: String;
      company: String;
      industry: String;
      summary: String;
      sDate: String;
      eDate: String;
      workHere: Boolean;
    };
    profile: {
      resumeLink: String,
    };
    coverLetter: String;
    dob: Date,
    teamLead: String,
    status: String
  }
  // Schema is database combination of rules 
  const applicantSchema: Schema = new mongoose.Schema({
    personal: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true },
      headline: { type: String },
      phone: { type: String, required: true },
      address: { type: String }
    },
    education: {
      school: { type: String },
      foStudy: { type: String },
      degree: { type: String },
      sDate: { type: String },
      eDate: { type: String }
    },
    experience: {
      title: { type: String },
      company: { type: String },
      industry: { type: String },
      summary: { type: String },
      sDate: { type: String },
      eDate: { type: String },
      workHere: { type: Boolean }
    },
    profile: {
      resumeLink: { type: String, required: true },
    },
    coverLetter: { type: String },
    dob: { type: Date, default: Date.now() },
    teamLead: { type: String },
    status: { type: String }
  });
=======
  personal: {
    firstName: String;
    lastName: String;
    email: String;
    headline: String;
    phone: String;
    address: String;
  };
  education: {
    school: String;
    foStudy: String;
    degree: String;
    sDate: String;
    eDate: String;
  };
  experience: {
    title: String;
    company: String;
    industry: String;
    summary: String;
    sDate: String;
    eDate: String;
    workHere: Boolean;
  };
  profile: {
    resumeLink: String;
  };
  coverLetter: String;
  dob: Date;
  teamLead: String;
  status: String;
}
// Schema is database combination of rules
const applicantSchema: Schema = new mongoose.Schema({
  personal: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    headline: { type: String },
    phone: { type: String, required: true },
    address: { type: String },
  },
  education: {
    school: { type: String },
    foStudy: { type: String },
    degree: { type: String },
    sDate: { type: String },
    eDate: { type: String },
  },
  experience: {
    title: { type: String },
    company: { type: String },
    industry: { type: String },
    summary: { type: String },
    sDate: { type: String },
    eDate: { type: String },
    workHere: { type: Boolean },
  },
  profile: {
    resumeLink: { type: String, required: true },
  },
  coverLetter: { type: String },
  dob: { type: Date, default: Date.now() },
  teamLead: { type: String },
  status: { type: String },
});
>>>>>>> d91e5f34a10c129588e3e272e561a922c194fc56

const Applicant = mongoose.model<IApplicant>("Applicant", applicantSchema);

export default Applicant;
