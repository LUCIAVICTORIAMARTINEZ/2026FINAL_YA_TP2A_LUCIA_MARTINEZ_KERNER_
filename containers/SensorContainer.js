import SensorController from "../controllers/SensorController.js";
import SensorService from "../services/SensorService.js";

const sensorService = new SensorService()
const sensorController = new SensorController(sensorService)

export default sensorController;