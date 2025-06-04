import { updateUser ,deleterUser ,getAllUser,getSingleUser,getUserProfile,getMyAppointments} from "../Controllers/userControllers.js";
import express from "express";
import { Router } from "express";
import { authenticate,restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), getAllUser);
router.get("/profile/me", authenticate, restrict(["patient"]), getUserProfile);
router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);
router.put("/:id", authenticate, restrict(["patient"]), updateUser);
router.delete("/:id", authenticate, restrict(["patient"]), deleterUser);
router.get("/appointments/my-appointments", authenticate, restrict(["patient"]), getMyAppointments);


export default router;