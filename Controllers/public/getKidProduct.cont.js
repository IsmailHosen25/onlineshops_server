const kidproductmodel=require("../../models/admin/kidproduct.mod")
const getkidproduct= async (req,res)=>{
  try{
         
    const data=await kidproductmodel.find()
    res.json({"data":data})


  }catch(e){
    res.json({"error":e.message})
  }
}
module.exports=getkidproduct