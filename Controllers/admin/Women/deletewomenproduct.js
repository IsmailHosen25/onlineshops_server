const womenproductmodel=require("../../../models/admin/womenproduct.mod")
const deletewomenproduct=async(req,res)=>{
    try{

        const d=await womenproductmodel.findOneAndDelete({code:req.params.code})
        res.json({"message":d})

    }catch(e){
        res.json({"error":e.message})
    }
}
module.exports=deletewomenproduct