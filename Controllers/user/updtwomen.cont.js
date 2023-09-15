const womenproductmodel=require("../../models/admin/womenproduct.mod")
const updtwomenitem=async(req,res)=>{
     try{ 
         
        const {star,code}=req.body
        const u= await womenproductmodel.findOneAndUpdate({code:code},{
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
module.exports=updtwomenitem