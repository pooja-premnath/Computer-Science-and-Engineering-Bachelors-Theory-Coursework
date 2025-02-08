const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const userModel=require("./model/Users")
const axios=require

app=express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/endsemlab");

app.post("/insert",(req,res)=>{
    const newStudent=req.body;
    userModel.create(newStudent)
    .then(function(response){
        console.log(response)
    })
    .catch(function(err){
        console.log(err)
    })
})


app.post("/update",(req,res)=>{
    const updatedStudent=req.body;
    userModel.findOneAndUpdate({id: updatedStudent.id}, updatedStudent, {new:true})
    .then(function(response){
        console.log(response)
    })
    .catch(function(err){
        console.log(err)
    })
})

app.post("/delete",(req,res)=>{
    const {id}=req.query;
    userModel.findOneAndDelete({id: id})
    .then(function(response){
        console.log(response)
    })
    .catch(function(err){
        console.log(err)
    })
})


app.get("/fetch",(req,res)=>{
    const {id}=req.query;
    userModel.findOne({id})
    .then(function(response){
        if(response){
        res.json(response)
        }

        else{
            res.json(null)
        }
    })
    .catch(function(err){
        console.log(err)
    })
})

app.get("/display",(req,res)=>{
    
    userModel.find()
    .then(function(response){
        res.json(response)
    })
    .catch(function(err){
        console.log(err)
    })
})


app.listen(3001,()=>{
    console.log("Server listening on Port 3001");
})