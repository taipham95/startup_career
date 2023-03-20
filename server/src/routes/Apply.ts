import express from 'express';
import Applicant, { IApplicant } from '../models/applicant.model';
const router = express.Router();

router.get('/:id', async (req, res) => {
  const applicants: IApplicant[] = await Applicant.find();
  if (applicants.length === 0) {
    return res.status(404).json({ message: "No applicants found" });
  }
  res.json(applicants);
});

router.post('/', async (req, res) => {
  const { name, email, phone, dob, resumeLink } = req.body;
  const applicant = new Applicant({ name, email, phone, dob, resumeLink });
  applicant.save((err, doc) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "An error occurred while saving the applicant" });
    }
    res.status(202).json(doc);
  });
});

export default router;