import express from "express";
import authRoute from "./routers/authRoute.js";
import { connect } from "./config/config.js";
import dotenv from "dotenv";
dotenv.config();

connect();

const app = express();
app.use(express.json());

app.use(authRoute)

const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running on port", port);
});
