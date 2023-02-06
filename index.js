import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";

// mkwPc1Ky4Hif6Js4
// mongodb+srv://shahdhaval201:<password>@cluster0.prxvwcn.mongodb.net/?retryWrites=true&w=majority

const app = express();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello Express");
});

const MONGODB_URL =
  "mongodb+srv://shahdhaval201:mkwPc1Ky4Hif6Js4@cluster0.prxvwcn.mongodb.net/test?retryWrites=true&w=majority";

const port = 5000;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
