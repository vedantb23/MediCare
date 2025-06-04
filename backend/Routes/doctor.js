import { updateDoctor ,deleterDoctor ,getAllDoctor,getSingleDoctor,getDoctorProfile} from "../Controllers/doctorController.js";
import express from "express";
import { Router } from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";
import { createBooking } from "../Controllers/doctorController.js";

const router = express.Router();

router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile);

router.get("/", getAllDoctor);
router.get("/:id",  getSingleDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleterDoctor);

router.post("/book", createBooking);
// nested routes for reviews
router.use("/:doctorId/reviews", reviewRouter);



export default router;