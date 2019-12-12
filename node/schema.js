const mongoose=require("mongoose");
var Product = mongoose.model("productList",{
    categories:{type:String},
    item:{type:String},
    quantity:{type:Number},
    price:{type:Number}

})
module.exports={Product};