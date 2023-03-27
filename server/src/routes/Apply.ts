import express from 'express';
import applyController from '../controllers/applyController';
const router = express.Router();

router.get("/", applyController.fetchAllApply)

router.get("/:id", applyController.fetchApply);

router.post("/", applyController.createApply);

// router.put("/:id", async (req, res) => {});

router.delete("/:id", applyController.deleteApply);

export default router;