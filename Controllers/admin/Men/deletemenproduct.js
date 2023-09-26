const menproductmodel=require("../../../models/admin/menproduct.mod")
const deletemenproduct=async(req,res)=>{
    try{

        const d=await menproductmodel.findOneAndDelete({code:req.params.code})
        res.json({"message":d})

    }catch(e){
        res.json({"error":e.message})
    }
}
module.exports=deletemenproduct