const menproductmodel=require("../../../models/admin/menproduct.mod")
const addmenproduct= async(req,res)=>{
         try{
            const {title,price,code}=req.body
            const {path,filename}=req.file
            const validcode=await menproductmodel.findOne({code:code})
            if(validcode===null){
                     const newproduct= new menproductmodel({
                        file:{
                           path:path,
                           filename:filename
                        },
                        title:title,
                        price:price,
                        code:code
                     })
                     await newproduct.save()
                     res.json({"message":"Accepted"})
            }else{
                res.json({"message":"code is alrady exists"})
            }

         }catch(e){
            res.json({"error":e.message})
         }
}
module.exports=addmenproduct