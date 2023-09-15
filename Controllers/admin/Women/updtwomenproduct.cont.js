const womenproductmodel=require("../../../models/admin/womenproduct.mod")
const updtwomenproduct=async(req,res)=>{
     try{ 
         
        const {title,price,code}=req.body
        const path=req.file.path
        const u= await womenproductmodel.findOneAndUpdate({code:code},{
            $set:{
                file:path,
                title:title,
                price:price
            }},
        {
            new:true
        })
        res.json({"message":u})

     }catch(e){
        res.json({"error":e.message})
     }
}
module.exports=updtwomenproduct