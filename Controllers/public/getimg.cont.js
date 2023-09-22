const getimg=(req,res)=>{
     res.download(`./image/${req.query.name}`)
}
module.exports=getimg