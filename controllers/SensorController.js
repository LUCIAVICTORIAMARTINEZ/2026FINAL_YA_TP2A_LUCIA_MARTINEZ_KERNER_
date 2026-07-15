class SensorController {
    constructor(service){
        this.sensorService = service;
    }

    registrarLectura = async (req, res, next)=>{
        try{
            const { id, tipo, valor, timestamp} = req.body
            const resultado = this.sensorService.registrarLectura(id, tipo, valor, timestamp)
            res.status(200).send({ success:true, message: resultado})
        }catch(error){
            next(error)
        }
    }

    listarSensores = async (req, res, next) =>{
        try{
            const sensores = this.sensorService.listarSensores()
            res.status(200).send({ success: true, message: sensores})
        }catch(error){
            next(error)
        }
    }
}

export default SensorController