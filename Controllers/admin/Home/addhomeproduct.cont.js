const productmodel=require('../../../models/admin/homeproduct.mod')
const addhomeproduct=async(req,res)=>{
          try{
               const {title,price,code,catagory}=req.body
               const {path,filename}=req.file
               const validcode=await productmodel.findOne({code:code})
               if(validcode===null){
                const newproduct= productmodel({
                  file:{
                    path:path,
                    filename:filename
                  },
                  catagory: catagory,
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