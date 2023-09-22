const menproductmodel=require("../../models/admin/menproduct.mod")
const getmenproduct= async (req,res)=>{
  try{
         
    const data=await menproductmodel.find()
    res.json({"data":data})


  }catch(e){
    res.json({"error":e.message})
  }
}
module.exports=getmenproduct