const kidproductmodel=require("../../models/admin/kidproduct.mod")
const updtkiditem=async(req,res)=>{
     try{ 
         
        const {star,code}=req.body
        const u= await kidproductmodel.findOneAndUpdate({code:code},{
            $set:{
                star:star
            }},
        {
            new:true
        })
        res.json({"message":u})

     }catch(e){
        res.json({"error":e.message})
     }
}
module.exports=updtkiditem