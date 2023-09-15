const homeproductmodel =require("../../../models/admin/homeproduct.mod")
const udthomeproduct=async(req,res)=>{
     try{ 
         
        const {catagory,title,price,code}=req.body
        const path=req.file.path
        const u= await homeproductmodel.findOneAndUpdate({code:code},{
            $set:{
                file:path,
                catagory:catagory,
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
module.exports=udthomeproduct