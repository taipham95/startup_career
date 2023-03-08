import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose, { ConnectOptions } from "mongoose";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
  
  mongoose.connect('mongodb://localhost:27017/joblistings', options)
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((err) => {
      console.error(err);
    });
// Create job schema
const jobSchema = new mongoose.Schema({
  name: String,
  requirements: String,
  description: String
});

// Create job model
const Job = mongoose.model('Job', jobSchema);

// Create applicant schema
const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  dob: Date,
  resumeLink: String
});

// Create applicant model
const Applicant = mongoose.model('Applicant', applicantSchema);

// Routes
app.get('/jobs', async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

app.post('/jobs', async (req, res) => {
  const { name, requirements, description } = req.body;
  const job = new Job({ name, requirements, description });
  await job.save();
  res.json(job);
});

app.get('/applicants', async (req, res) => {
  const applicants = await Applicant.find();
  res.json(applicants);
});

app.post('/applicants', async (req, res) => {
  const { name, email, phone, dob, resumeLink } = req.body;
  const applicant = new Applicant({ name, email, phone, dob, resumeLink });
  await applicant.save();
  res.json(applicant);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
