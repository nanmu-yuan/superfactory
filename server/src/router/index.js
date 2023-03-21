import express from'express'
import connection from '../models/db'
const router = express.Router();


router.post("/login",(req,res)=>{
    res.send({
        status:200,
        mes:'login is ok'
    })
})

export default router