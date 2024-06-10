import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("connected with database"))
  .catch((err) => console.log(err));

// mongoose.connect("mongodb://localhost:27017/realEstae").then(() => console.log("connected"));

const app = express();

app.use(express.json());

app.listen(8080, () => {
  console.log("Server is up and running on 8080!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err , req , res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success : false,
    message,
    statusCode
  })
})
