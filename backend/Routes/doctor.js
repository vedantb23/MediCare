import { updateDoctor ,deleterDoctor ,getAllDoctor,getSingleDoctor,getDoctorProfile} from "../Controllers/doctorController.js";
import express from "express";
import { Router } from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";
import reviewRouter from "./review.js";
const router = express.Router();

router.get("/", getAllDoctor);
router.get("/:id",  getSingleDoctor);
router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleterDoctor);


// nested routes for reviews
router.use("/:doctorId/reviews", reviewRouter);

router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile);


export default router;