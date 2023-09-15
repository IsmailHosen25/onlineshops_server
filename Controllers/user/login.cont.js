const usermodule =require("../../models/user/user.mod")
const bcrypt =require("bcrypt")
const JwtToken =require("../../service/jwttoken")
const jwt =require("jsonwebtoken")
require("dotenv").config()
const login=async(req,res)=>{
       try{   

              const {number_email,password}=req.body
              const validuser=await usermodule.findOne({number_email:number_email})
              if(validuser===null){
                   res.json({
                     "message":"registar first"
                   })
              }
              else{
                  if(validuser.number_email==="admin"){
                  
                     const passwordvalid= await bcrypt.compare(password,validuser.password)
                     if(passwordvalid){
                        const payload={
                           number_email:validuser.number_email,
                           admin:true,
                           username:validuser.username
                        }
                        const token=jwt.sign(payload,process.env.AdminJwt,{expiresIn:"12h"})
                        res.cookie("token",token).json({"message":"accepted"})
                     }
                     else{
                        res.json({"message":"Not athurizrd"})
                     }

                  }else{
                     const passwordvalid= await bcrypt.compare(password,validuser.password)
                     if(passwordvalid){
                        const token =JwtToken(validuser.username,validuser.number_email)
                        res.cookie("token",token)
                        res.end()
                     }
                     else{
                        res.json({"message":"Not athorized"})
                     }
                  }
              }

       }catch(e){
               res.json({"error":e.message})
       }
}
module.exports=login