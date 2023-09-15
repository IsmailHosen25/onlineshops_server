const menproductmodel=require("../../models/admin/menproduct.mod")
const updtmenitem=async(req,res)=>{
     try{ 
         
        const {star,code}=req.body
        const u=await menproductmodel.findOneAndUpdate({code:code},{
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
module.exports=updtmenitem