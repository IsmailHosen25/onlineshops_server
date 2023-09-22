const express = require("express")
const getprouct=express.Router()

const gethomeproduct=require("../Controllers/public/gethomeproduct.cont")

const getmenproduct=require("../Controllers/public/getMenProcuct.cont")

const getwomenproduct=require("../Controllers/public/getwomenproduct.cont")

const getkidproduct=require("../Controllers/public/getKidProduct.cont")

const getimg=require("../Controllers/public/getimg.cont")

getprouct.get("/home", gethomeproduct)
getprouct.get("/men", getmenproduct)
getprouct.get("/women", getwomenproduct)
getprouct.get("/kid", getkidproduct)
getprouct.get("/img", getimg)
module.exports=getprouct