const jwt =require("jsonwebtoken")
require('dotenv').config()
const JwtToken=(username,number_email)=>{
    const payload={
        username:username,
        number_email:number_email
    }
    return jwt.sign(payload,process.env.JWTSEID,{ expiresIn:"4h"})
}
module.exports= JwtToken
