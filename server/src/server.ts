import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import apiRouter from '../src/routes/routes'
import connectToDB from "./config/db"
import dotenv from "dotenv"

const app = express();
const PORT = 8001;

dotenv.config()
// Connect mongodb
connectToDB()

// Middleware
app.use(cors());
app.use(express.json());

// Setup routes
app.use('/careers', apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is listening at PORT ${PORT}`);
});