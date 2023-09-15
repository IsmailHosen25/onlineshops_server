const productmodel=require('../../models/admin/homeproduct.mod')
const gethomeproduct= async (req,res)=>{
  try{
         
    const data=await productmodel.find()
    res.json({"data":data})


  }catch(e){
    res.json({"error":e.message})
  }
}
module.exports=gethomeproduct