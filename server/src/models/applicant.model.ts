import mongoose, { Schema } from 'mongoose';
// Variable declaration
export interface IApplicant {
    name: String,
    email: String
  }
  // Schema is database combination of rules 
  const applicantSchema: Schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true }
  });
  
  const Applicant = mongoose.model<IApplicant>('Applicant', applicantSchema);
  
  export default Applicant;