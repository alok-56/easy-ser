const Userautmodel=require('../../db/schema/UserAut')

const Alluser=async(req,res)=>{
    let alluser=await Userautmodel.find();
    res.send(alluser);
}

module.exports=Alluser;