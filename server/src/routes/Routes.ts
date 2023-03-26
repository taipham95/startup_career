import express from 'express';
import applyApp from "./apply"
import jobs from './jobs'
const router = express.Router();

//job detail
router.use('/jobs', jobs)
// applications
router.use('/apply', applyApp);

export default router;
