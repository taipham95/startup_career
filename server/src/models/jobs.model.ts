import mongoose, { Document, Model, Schema } from 'mongoose';
// Variable declaration
export interface IJob {
    title: string;
    location: string;
    tags: string[];
    created_at: Date; // assuming timestamp is a Unix timestamp in seconds
    updated_at: Date; // assuming timestamp is a Unix timestamp in seconds
    available: boolean;
    descriptions: {
      title: string;
      description: string;
    }[];
    requirements: string[];
  }
  // Schema is database combination of rules
  const jobSchema: Schema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    tags: { type: String, required: true },
    created_at: { type: Date },
    updated_at: { type: Date },
    available: { type: Boolean, required: true },
    descriptions: {
        title: { type: String },
        description: { type: String },
      },
    requirements: { type: Object, required: true }
  });
  
  const Job = mongoose.model<IJob>('Job', jobSchema);
  
  export default Job;