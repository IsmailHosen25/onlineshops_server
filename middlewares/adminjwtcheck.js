const jwt=require("jsonwebtoken")
require("dotenv").config()
const adminjwtcheck=(req,res,next)=>{
    try{
           
        const token=req.cookies.token
        const decode=jwt.verify(token,process.env.AdminJwt)

        req.username=decode.username
        req.number_email=decode.number_email
        req.admin=decode.admin
        next()



    }catch(e){
        next("JWT Expired")
    }

}
module.exports=adminjwtcheck