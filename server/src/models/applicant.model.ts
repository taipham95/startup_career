import mongoose, { Schema } from 'mongoose';
// Variable declaration
export interface IApplicant {
    personal: {
      fname: String;
      lname: String;
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
    resumeLink: String;
    coverLetter: String;
    dob: Date,
  }
  // Schema is database combination of rules 
  const applicantSchema: Schema = new mongoose.Schema({
    personal: {
      fname: { type: String, required: true },
      lname: { type: String, required: true },
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
    resumeLink: { type: String, required: true },
    coverLetter: { type: String, required: true },
    dob: { type: Date, default: Date.now() }
  });

  const Applicant = mongoose.model<IApplicant>('Applicant', applicantSchema);
  
  export default Applicant;