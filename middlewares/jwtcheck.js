const jwt=require("jsonwebtoken")
require("dotenv").config()
const checkjwt=(req,res,next)=>{
    try{
          const token =req.cookies.token
          const decode=jwt.verify(token,process.env.JWTSEID)
          req.username=decode.username
          req.number_email=decode.number_email
          next()
    }catch{
        next('Token Expired')
    }

}
module.exports=checkjwt