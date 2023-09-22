const womenproductmodel=require("../../models/admin/womenproduct.mod")
const getwomenproduct= async (req,res)=>{
  try{
         
    const data=await womenproductmodel.find()
    res.json({"data":data})


  }catch(e){
    res.json({"error":e.message})
  }
}
module.exports=getwomenproduct