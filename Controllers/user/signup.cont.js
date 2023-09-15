const usermodule =require("../../models/user/user.mod")
const bcrypt= require("bcrypt")
const signup= async (req,res)=>{
  try{
    if(req.body.password===req.body.cpassword){
      const validuser=await usermodule.findOne({number_email:req.body.number_email})
      if(validuser===null){
        const validusername=await usermodule.findOne({username:req.body.username})
        if(validusername===null){
          const hashedpassword= await bcrypt.hash(req.body.password, 10)
            const newuser=new usermodule({
              username:req.body.username,
              number_email:req.body.number_email,
              password:hashedpassword
            })
            await newuser.save()
            res.json({"message":"Accepted"})
        }else{
          res.json({"message":"User name alrady exit"})
      }
      }
      else{
        res.json({"message":"valid user"})
      }
 }
 else{
   res.json({"message":"Password dose not Match"})
 }
  }catch(e){
     res.json({"error": e.message})
  }


}
module.exports=signup