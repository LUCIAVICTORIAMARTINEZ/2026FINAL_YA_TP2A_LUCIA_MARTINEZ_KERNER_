import { Router } from 'express';
import sensorController from '../containers/SensorContainer.js';

const router = Router()

router.post("/lecturas", sensorController.registrarLectura)
router.get("/sensores", sensorController.listarSensores)

export default router;