const mongoose=require("mongoose");

const tableSchema= new mongoose.Schema(
    {
        
        name:
            {
                type:String,
                required:true
            },

        rno:{
                type:String,
                required:true
        }

    }
)


const userModel=mongoose.model("users",tableSchema);
module.exports=userModel;