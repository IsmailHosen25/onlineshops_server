const homeproduct=require("../../../models/admin/homeproduct.mod")
const deletehomeproduct=async(req,res)=>{
    try{
        const d= await homeproduct.findOneAndDelete({code: req.body.code})
         res.json({"message":"Deleted","product":d})
    }catch(error){
         res.json({"error":error.message})
    }
}
module.exports=deletehomeproduct