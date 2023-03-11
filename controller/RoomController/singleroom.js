const roomModel=require('../../db/schema/room')

const singleroom=async(req,res)=>{
    let room=await roomModel.findOne({_id:req.params.id});
    res.send(room);
}

module.exports=singleroom;