import mongoose, { Document, Model, Schema } from 'mongoose';
// Variable declaration
export interface IJob {
    title: String;
    location: String;
    type: String;        // Full time, part time
    tags: String[];      // Remote, Engineer
    created_at: Date; 
    updated_at: Date;
    available: Boolean;
    descriptions: {
      title: String;
      description: String;
      detailDescription: String[]; // List Array DetailJob
    }[];
    requirements: String[];
  }
  // Schema is database combination of rules
  const jobSchema: Schema = new mongoose.Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true },
    tags: { type: Array, required: true },
    created_at: { type: Date, default: Date.now() },
    updated_at: { type: Date, default: Date.now() },
    available: { type: Boolean, required: true },
    descriptions: [{
        title: { type: String },
        description: { type: String },
        detailDescription: { type: Array },
      }],
    requirements: { type: Array, required: true }
  });
  
  const Job = mongoose.model<IJob>('Job', jobSchema);
  // export default Job;
   // export default Job;
  export default Job;
