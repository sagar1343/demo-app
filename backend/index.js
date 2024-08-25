import "dotenv/config";
import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("common"))

const PORT = process.env.PORT || 4000


app.get("/demo", (req, res) => res.status(200).send("Demo is working"))

app.listen(PORT, () => console.log("listening on port " + PORT))