import Sensor from '../models/Sensor.js';

class SensorService {
    constructor(){
        this.sensores = []
    }

    registrarLectura(id, tipo, valor, timestamp) {
        if(!id || id.length !== 8 || !/^[a-zA-Z0-9]{8}$/.test(id)) throw new Error("El id debe tener 8 caracteres alfanuméricos");
        if(!['TEMPERATURA', 'HUMEDAD', 'CO2'].includes(tipo)) throw new Error("El tipo debe ser TEMPERATURA, HUMEDAD o C02");
        if(valor === undefined || valor === null) throw new Error ("El valor debe ser numerico");
        if(!timestamp || typeof timestamp !=='string') throw new Error("El timestamp debe ser un string");

        const sensorExistente = this.sensores.find(s => s.id === id)
        if(sensorExistente){
            sensorExistente.tipo = tipo
            sensorExistente.valor = valor
            sensorExistente.timestamp = timestamp
        }else {
            const nuevoSensor = new Sensor(id, tipo, valor, timestamp)
            this.sensores.push(nuevoSensor)
        }

        let mensajeAlerta = null
        if(tipo === 'TEMPERATURA' && valor > 35) mensajeAlerta = "TEMPERATURA alta"
        if (tipo === 'HUMEDAD' && valor < 20) mensajeAlerta = "HUMEDAD baja"
        if (tipo === 'CO2' && valor > 1000) mensajeAlerta = "CO2 alto"

        return { id, tipo, valor, timestamp, alerta: mensajeAlerta}
    }

    listarSensores () {
        return this.sensores;
    };
}

export default SensorService;