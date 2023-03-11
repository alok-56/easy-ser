const Userautmodel=require('../../db/schema/UserAut')

const emailcheck=async(req,res)=>{
    let data=await Userautmodel.findOne({email:req.params.email});
    if(data){
        res.send(data)
    }
    else{
        res.status(400).json("error")
    }
}

module.exports=emailcheck;