import express from "express";
import dotenv from "dotenv";
import { ENV } from "./config/env.js";

dotenv.config();
const app = express();

app.listen(ENV.PORT, () =>
    console.log(`Server started on port: http://localhost:${ENV.PORT}`)
)