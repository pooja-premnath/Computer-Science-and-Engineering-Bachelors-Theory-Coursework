const express= require("express");
const mongoose= require("mongoose");
const cors= require("cors")
const UserModel= require("./model/Users")


app= express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://localhost:27017/bookshelf")

app.get("/userEndPoint", (req, res) =>{
    const {name, password}= req.query;
    UserModel.findOne({name,password})
    .then(function(response){
        if(response){
            res.json(response.password)
        }
        else{
            res.json("Not Found")
        }
    })
    .catch(function(err){console.log(err)})
})


app.listen(3001, () =>{
    console.log("Server listening on port 3001")
})