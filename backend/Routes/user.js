import { updateUser ,deleterUser ,getAllUser,getSingleUser} from "../Controllers/userControllers.js";
import express from "express";
import { Router } from "express";
import { authenticate,restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/", authenticate, restrict(["admin"]), getAllUser);
router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);
router.put("/:id", authenticate, restrict(["patient"]), updateUser);
router.delete("/:id", authenticate, restrict(["patient"]), deleterUser);

export default router;