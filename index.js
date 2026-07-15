import express from "express"
import router from "./routes/router.js"
import errorMiddleware from "./middlewares/errorMiddleware.js"

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended:false }));
app.use(router);

app.use(errorMiddleware)

app.listen(8000, ()=>{
    console.log(`Servidor corriendo http://localhost:8000`)
})