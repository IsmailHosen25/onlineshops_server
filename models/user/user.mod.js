const mongoose =require("mongoose")
const userSchema=mongoose.Schema({
      username:{
        type:String,
        required:true
      },
      number_email:{
        type:String,
        required:true
      },
      password:{
        type:String,
        required:true
      }
})
const usermodule=new mongoose.model("users",userSchema)
module.exports=usermodule