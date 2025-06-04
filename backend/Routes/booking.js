import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";
import {
  createBooking,
  getBooking,
  deleteBooking,
  updateBooking,
  getAllBookings,
} from "../Controllers/bookingController.js";

const router = express.Router();

router.post("/", authenticate, restrict(["patient"]), createBooking);
router.get(
  "/:id",
  authenticate,
  restrict(["patient", "doctor", "admin"]),
  getBooking
);
router.delete("/:id", authenticate, restrict(["patient"]), deleteBooking);
router.put("/:id", authenticate, restrict(["patient", "doctor"]), updateBooking);
router.get("/", authenticate, restrict(["admin"]), getAllBookings);

export default router;
