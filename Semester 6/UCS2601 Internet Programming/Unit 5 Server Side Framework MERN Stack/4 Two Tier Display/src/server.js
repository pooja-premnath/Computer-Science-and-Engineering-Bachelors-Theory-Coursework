const express= require("express");
const cors= require("cors");


app= express();
app.use(cors());
app.use (express.json());

let details=[
    { id: 1, name: "Pooja Premnath"},
    { id: 2, name: "Rakshith Subramanian"},
    { id: 3, name: "Parthiban M"},
    { id: 4, name: "VS Pranav"}
]


app.get ("/endPoint", (req,res) =>{
    res.json({message: details})
})


app.listen(3001, () =>{
    console.log("Server listening on port 3001");
})