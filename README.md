## Endpoints

### POST /lecturas
Recibe una lectura y actualiza el sensor.

En Body JSON
{
    "id": "SEN4A9X1",
    "tipo": "TEMPERATURA",
    "valor": 32.5,
    "timestamp": "2025-12-01T18:30:00Z"
}

Escribir: http://localhost:8000/lecturas

### GET /sensores
Lista todos los sensores con su ultima lectura

http://localhost:8000/sensores