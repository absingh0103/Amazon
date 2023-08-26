const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    id:String,
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    discount:String,
    tagline:String
});
const productModel = new mongoose.model("products",productSchema);
module.exports=productModel;