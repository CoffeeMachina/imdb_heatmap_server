import express from "express";
import dotenv from 'dotenv'

dotenv.config()
import {dbConfig} from "./config/dbConfig.js";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/heatmapRoute.js";

mongoose.set('strictQuery', false);

dbConfig();
const app = express();
//middlewares
app.use(cors()); //mitigates errors
app.use(morgan("dev")); //run morgan in dev mode
app.use(express.json()); //body parsing


const PORT = process.env.PORT || 4050;

app.use("/api", router)


app.listen(PORT, () => console.log(`Listing on port ${PORT}.`));

