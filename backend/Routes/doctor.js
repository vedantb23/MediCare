import { updateDoctor ,deleterDoctor ,getAllDoctor,getSingleDoctor,getDoctorProfile} from "../Controllers/doctorController.js";
import express from "express";
import { Router } from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";
import { createBooking } from "../Controllers/doctorController.js";
import Booking from "../models/BookingSchema.js";
const router = express.Router();
console.log("💡 doctorRoute loaded");

router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile);

router.get("/", getAllDoctor);
// GET /doctors/appointments/my-appointments
router.get(
  "/appointments/my-appointments",
  authenticate,
  restrict(["doctor"]),
  async (req, res) => {
    try {
      const doctorId = req.userId;
      const appointments = await Booking.find({ doctor: doctorId }).populate(
        "user"
      );
      res.status(200).json({ success: true, data: appointments });
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch appointments" });
    }
  }
);



router.get("/:id",  getSingleDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleterDoctor);

router.post("/book", createBooking);
// nested routes for reviews
router.use("/:doctorId/reviews", reviewRouter);
router.get("/doctors/:doctorId", async (req, res) => {
  try {
    const bookings = await Booking.find({
      doctor: req.params.doctorId,
    }).populate("user");
    res.status(200).json({ success: true, data: bookings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});


export default router;