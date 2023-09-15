const homeproductmodel =require("../../models/admin/homeproduct.mod")
const udthomeitem=async(req,res)=>{
     try{ 

        const  {code,star}=req.body
        const u= await homeproductmodel.findOneAndUpdate({code:code},{
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
module.exports=udthomeitem