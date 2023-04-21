import express from 'express';
import applyController from '../controllers/applyController';
import authMdw from '../middlewares/authMdw';
const router = express.Router();


// API Get All Employee
router.get("/",authMdw.authMdw, applyController.fetchAllApply)

// API Get a Employee
router.get("/:id",authMdw.authMdw, applyController.fetchApply);

// API Create Employee
router.post("/", applyController.createApply);

// API Update Employee
router.put("/:id",authMdw.authMdw, applyController.updateApply);

// API Delete Employee
router.delete("/:id",authMdw.authMdw, applyController.deleteApply);

export default router;