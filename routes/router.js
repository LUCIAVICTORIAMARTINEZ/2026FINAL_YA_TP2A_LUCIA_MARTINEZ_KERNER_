import { Router } from "express";
import sensorRoutes from "./sensorRoutes.js"

const router = Router();

router.use("/", sensorRoutes);

export default router;