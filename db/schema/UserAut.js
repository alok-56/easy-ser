const mongoose=require('mongoose');

const Userautschema=new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    password:String,
    gender:String,
    profession:String,
    images:String,
    date:Date
});
const Userautmodel=mongoose.model("userAut",Userautschema);
module.exports=Userautmodel;