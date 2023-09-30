const mongoose=require("mongoose");

const item=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    quantity:{
        type:Number,
    }
})

Item_info=mongoose.model("Item_info",item);
module.exports=Item_info;

