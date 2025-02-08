const mongoose=require("mongoose");
const AnimalTableSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        legs:{
            type:Number,
            required:true
        },
        color:{
            type:String,
            required:true
        },
        count:{
            type:Number,
            required:true
        }
    }
)

const AnimalModel= mongoose.model("animals",AnimalTableSchema);
module.exports=AnimalModel;
