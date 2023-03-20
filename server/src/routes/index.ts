import express from 'express';
import jobDetail from "./JobDetail"
import applyApp from "./Apply"

const router = express.Router();

//Job detail KHANG
router.use("/jobs", jobDetail);

//Apply TAIPHAM
router.use("/apply", applyApp);

export default router;


// import express from "express";
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });
