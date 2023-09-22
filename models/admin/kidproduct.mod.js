const mongoose=require("mongoose")
const kidProductSchema=mongoose.Schema({
    file:{
        path:{
            type:String,
            required:true
        },
        filename:{
            type:String,
            required:true
        }
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
const kidproductmodel=new mongoose.model("kid",kidProductSchema)
module.exports=kidproductmodel