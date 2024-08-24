import "dotenv/config";
import express from "express";
import morgan from "morgan";

app.use(morgan("common"))
const app = express();
const PORT = process.env.PORT || 4000

app.get("/demo", (req, res) => res.status(200).send("Demo is working"))

app.listen(PORT, () => console.log("listening on port " + PORT))