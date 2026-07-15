const errorMiddleware = (error, req, res, next)=>{
    res.status(400).send({ success:false, message: error.message})
}

export default errorMiddleware