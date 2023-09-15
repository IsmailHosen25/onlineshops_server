const express=require("express")
const userRouter=express.Router()
const jwtcheck =require("../middlewares/jwtcheck")

const signup =require("../Controllers/user/signup.cont")
const login =require("../Controllers/user/login.cont")

const updtkiditem=require("../Controllers/user/updtkid.cont")

const updthomeitem=require("../Controllers/user/updthome.cont")

const updtmenitem=require("../Controllers/user/updtmen.cont")

const updtwomenitem=require("../Controllers/user/updtwomen.cont")

userRouter.post("/login",login)
userRouter.post("/signup",signup)
userRouter.put("/updthomeitem",jwtcheck,updthomeitem)
userRouter.put("/updtmenitem",jwtcheck,updtmenitem)
userRouter.put("/updtwomenitem",jwtcheck,updtwomenitem)
userRouter.put("/updtkiditem",jwtcheck,updtkiditem)
module.exports=userRouter