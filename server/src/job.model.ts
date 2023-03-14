import mongoose, { Document, Model, Schema } from 'mongoose';
// Variable declaration
export interface IJob {
    id: string;
    title: string;
    location: string;
    type: string;
    tags: string[];
    created_at: number; // assuming timestamp is a Unix timestamp in seconds
    updated_at: number; // assuming timestamp is a Unix timestamp in seconds
    available: boolean;
    descriptions: {
      title: string;
      description: string;
    }[];
    resumeLink: string;
    requirements: string[];
  }
  // Schema is database combination of rules 
  const jobSchema: Schema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    tags: { type: String, required: true },
    created_at: { type: Number, required: true },
    updated_at: { type: Number, required: true },
    available: { type: Boolean, required: true },
    descriptions: {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    resumeLink: { type: String, required: true },
    requirements: { type: Object, required: true }
  });
  
  const Job = mongoose.model<IJob>('Job', jobSchema);
  
  export default Job;