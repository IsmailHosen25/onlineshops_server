const express =require("express")
const adminrouter=express.Router()
const adminjwtcheck =require("../middlewares/adminjwtcheck")
const uploadimg=require("../middlewares/uplodeimg")

const addhomeproduct =require("../Controllers/admin/Home/addhomeproduct.cont")
const deletehomeproduct=require("../Controllers/admin/Home/deletehomeproduct.cont")
const udthomeproduct=require("../Controllers/admin/Home/udthomeproduct.cont")

const addmenproduct=require("../Controllers/admin/Men/menproduct.cont")
const updtmenproduct=require("../Controllers/admin/Men/updtmenproduct.cont")
const deletemenproduct =require("../Controllers/admin/Men/deletemenproduct")

const addwomenproduct=require("../Controllers/admin/Women/womenproduct.cont")
const updtwomenproduct=require("../Controllers/admin/Women/updtwomenproduct.cont")
const deletewomenproduct =require("../Controllers/admin/Women/deletewomenproduct")


const addkidproduct =require("../Controllers/admin/Kid/kidproduct.cont")
const updtkidproduct=require("../Controllers/admin/Kid/updtkidproduct.cont")
const deletekidproduct =require("../Controllers/admin/Kid/deletekidproduct.cont")



adminrouter.post("/addhomeproducts",adminjwtcheck,uploadimg.single("file"),addhomeproduct)
adminrouter.put("/udthomeproduct",adminjwtcheck,uploadimg.single("file"),udthomeproduct)
adminrouter.delete("/deletehomeproducts/:code",adminjwtcheck,deletehomeproduct)


adminrouter.post("/addmenproduct", adminjwtcheck,uploadimg.single("file"),addmenproduct)
adminrouter.put("/updtmenproduct",adminjwtcheck,uploadimg.single("file"),updtmenproduct)
adminrouter.delete("/deletemenproduct/:code",adminjwtcheck,deletemenproduct)


adminrouter.post("/addwomenproduct", adminjwtcheck,uploadimg.single("file"),addwomenproduct)
adminrouter.put("/updtwomenproduct",adminjwtcheck,uploadimg.single("file"),updtwomenproduct)
adminrouter.delete("/deletewomenproduct/:code",adminjwtcheck,deletewomenproduct)


adminrouter.post("/addkidproduct",adminjwtcheck,uploadimg.single("file"),addkidproduct)
adminrouter.put("/updtkidproduct",adminjwtcheck,uploadimg.single("file"),updtkidproduct)
adminrouter.delete("/deletekidproduct/:code",adminjwtcheck,deletekidproduct)


module.exports=adminrouter