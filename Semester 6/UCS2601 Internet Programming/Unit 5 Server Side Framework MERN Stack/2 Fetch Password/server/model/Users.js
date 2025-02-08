const mongoose=require("mongoose");
const UserTableSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        rno:{
            type:String,
            required:true
        }
    }

)

const UserModel=mongoose.model("users",UserTableSchema);
module.exports=UserModel;