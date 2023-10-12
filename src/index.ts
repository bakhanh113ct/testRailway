import { config } from "dotenv";
import express from "express";

config();

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res, next) => {
//   console.log("server running");
  res.json({ hi: "hi" });
});

app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
});
