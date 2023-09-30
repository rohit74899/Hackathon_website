const mongoose=require('mongoose');

DB=process.env.DB;

mongoose.connect("mongodb+srv://mern_proj:12345@cluster0.9kteqvb.mongodb.net/Store_data?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    
})
.then(()=>console.log("connection is succesfull.."))
.catch((er)=>console.log("NO connection"))