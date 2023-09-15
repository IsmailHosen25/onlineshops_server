const productmodel=require('../../../models/admin/homeproduct.mod')
const addhomeproduct=async(req,res)=>{
          try{
               const {title,price,code}=req.body
               const path=req.file.path
               console.log(req.body)
               console.log(path)
               const validcode=await productmodel.findOne({code:code})
               if(validcode===null){
                const newproduct= productmodel({
                  file:path,
                  title:title,
                  price:price,
                  code:code

                })
                await newproduct.save()
                res.json({"message":"Accepted"})
               }
               else{
                res.json({"message":"Alrady in data base"})
               }

          }catch(error){
            res.json({"message":error.message})
          }
}
module.exports=addhomeproduct