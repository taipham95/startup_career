import express from 'express';
import applyController from '../controllers/applyController';
const router = express.Router();


router.get("/", async (req, res) => {
    res.send("Hello TaiPham");
  });

router.get("/:id", async (req, res) => {});

router.post("/", applyController.createApply);

router.put("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {});

export default router;