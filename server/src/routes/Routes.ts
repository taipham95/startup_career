import express from 'express';
import applyApp from "./apply"
const router = express.Router();

router.use("/apply", applyApp);

export default router;
