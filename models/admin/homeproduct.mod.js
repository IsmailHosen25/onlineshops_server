const mongoose =require("mongoose")
const productShema=new mongoose.Schema({
    file:{
        path:{
            type:String,
        }
        ,
        filename:{
                type:String,
            }

    },
    catagory:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        default: 1
    },
    star:{
        type:Number,
        default:0
    },
    date:{
         type:Date,
         default: Date.now
    }

})
const productmodel=new mongoose.model("homeproducts",productShema)
module.exports=productmodel