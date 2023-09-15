const express = require("express")
const getprouct=express.Router()

const gethomeproduct=require("../Controllers/public/gethomeproduct.cont")

getprouct.get("/home", gethomeproduct)
module.exports=getprouct