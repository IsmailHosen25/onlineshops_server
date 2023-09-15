const kidproductmodel=require("../../../models/admin/kidproduct.mod")
const deletekidproduct=async(req,res)=>{
    try{

        const d=await kidproductmodel.findOneAndDelete({code:req.body.code})
        res.json({"message":d})

    }catch(e){
        res.json({"error":e.message})
    }
}
module.exports=deletekidproduct