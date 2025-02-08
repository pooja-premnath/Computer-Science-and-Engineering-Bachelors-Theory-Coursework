const express=require('express');
const cors=require('cors');
const mongoose= require('mongoose');
const UserModel= require('./model/Users')

const app=express();

app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/student");

app.get("/userEndPoint",(req,res)=>
        UserModel.find({})
        .then(function(users){res.json(users)})
        .catch(function(err){res.json(err)} )


)


app.listen(3001,()=>
    console.log("Server listening on port 3001")
)