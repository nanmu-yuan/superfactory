const express = require('express');
const myRouter= require("./router")
const router = express.Router();

router.post("/login",myRouter.login)


export default router