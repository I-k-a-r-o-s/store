import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/products.route.js";

dotenv.config();

const app = express();

app.use(express.json()); //allows to accept json data in the req.body

app.use("/api/products", router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  connectDB();
  console.log("Server started at port:"+port);
});
