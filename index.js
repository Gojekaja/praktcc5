import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import db from "./config/Database.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);
db.authenticate()
    .then(() => console.log("Database terkoneksi"))
    .catch(error => console.log("Error koneksi ke database:", error));

app.listen(5000, () => console.log("Server connected"));
