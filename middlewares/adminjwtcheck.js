const jwt=require("jsonwebtoken")
require("dotenv").config()
const adminjwtcheck=(req,res,next)=>{
    try{
          const token =req.cookies.token
          const decode=jwt.verify(token,process.env.ADMINJWT)
          req.user=decode.username
          req.email=decode.number_email
          req.admin=decode.admin
          next()
    }catch{
    next("jwt Expired")
    }

}
module.exports=adminjwtcheck