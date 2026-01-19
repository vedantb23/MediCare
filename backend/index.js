import "./env.js";


import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoute from "./Routes/auth.js";
import crypto from "crypto";
// const crypto = require("crypto");
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctor.js";
import reviewRoute from "./Routes/review.js";
import bookingroute from "./Routes/booking.js";
import aiRoutes from "./Routes/aiRoutes.js";
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  // origin: "http://localhost:5173",
  // credentials: true,
  //   origin: "*", // Allow all origins temporarily
  //   credentials: true,
};
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});
// mongo connect
mongoose.set("strictQuery", false);

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ MongoDB connection failed");
    console.error(err);
    process.exit(1); // HARD EXIT — no pretending
  }
};

// middlewarre
app.use(express.json());
app.use(cookieParser());
app.use(cors());
// app.use(cors(corsOptions));
// app.use(cors({ origin: true, credentials: true }));

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/doctors", doctorRoute);
app.use("/api/v1/reviews", reviewRoute);
app.use("/api/v1/bookings", bookingroute);
app.use("/api/v1/ai", aiRoutes);

// console.log("GEMINI FROM INDEX:", process.env.GEMINI_API_KEY);

startServer();
// app.listen(port, () => {
//   try {
//     console.log(`Server is running on http://localhost:${port}`);

//   } catch (error) {
//       console.log(error)
//   }
// });
