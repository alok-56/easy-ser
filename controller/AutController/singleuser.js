const Userautmodel=require('../../db/schema/UserAut')

const singleuser=async(req,res)=>{
    let singleuser=await Userautmodel.findOne({_id:req.params.id});
    res.send(singleuser);
}

module.exports=singleuser;