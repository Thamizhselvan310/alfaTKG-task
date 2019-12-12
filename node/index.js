const mongoose=require("mongoose");
const express=require("express");
const bodyParser=require("body-parser");
const cors = require("cors")
var app=express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/productdb");
var {Product}=require("./schema");
app.get("/",function(req,res){
    Product.find().then(function(data){
        console.log(data);
        res.json(data);
    }).catch(function(err){
        Console.log(err);
    })
    
})
app.post("/create",function(req,res){
    var temp=req.body
    console.log(temp)
    var prod = new Product(temp)
    prod.save().then(function(data){
        res.json({message:"success"})
    }).catch(function(err){
        console.log(err)
    })

})
app.get("/delete/:id",function(req,res){
    Product.findOneAndDelete(req.param.id).then(
        function(data){
            console.log("deleted")
        }
    )
})

app.listen(3000);