const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    name:{
        type: String,
        required:true
    }
})


const userSchemaModel=mongoose.model("students",userSchema)
module.exports=userSchemaModel;