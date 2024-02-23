import { Router } from "express";
import Login from "../controllers/Login.js";
import Battery from "../controllers/Battery.js";
import ShowBattery from "../controllers/ShowBattery.js";

const router = Router();

router.post("/login", Login);
router.post("/post", Battery);
router.get("/show", ShowBattery);

export default router;
