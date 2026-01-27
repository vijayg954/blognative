import express from "express";
import cors from "cors";
import DbConnect from "./config/Db.js";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes.js";

import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
DbConnect();

app.use("/api/v1", blogRoutes);

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
