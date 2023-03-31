import express from 'express';
import jobController from '../controllers/jobController';
const router = express.Router();

router.get("/", jobController.fetchAllJob)

router.get("/:id", jobController.fetchJob);

router.post("/", jobController.createJob);

router.put("/:id", jobController.updateJob);

router.delete("/:id", jobController.deleteJob);

export default router;