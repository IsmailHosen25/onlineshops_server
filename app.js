const express =require("express")
const app=express()
const cors =require("cors")
const cookieparser=require("cookie-parser")

const adminrouter=require("./routers/admin.route")
const userRouter =require("./routers/user.route")
const getproduct = require("./routers/getproduct.route")
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieparser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/admin",adminrouter)
app.use("/user",userRouter)
app.use("/product", getproduct)

app.use((errors,req,res,next)=>{
    if(errors.message){
        res.json({"error":errors.message})
    }
    else{
        res.json({"error":errors})
    }

})
module.exports = app;