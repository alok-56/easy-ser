const roomModel=require('../../db/schema/room')

const postroom=async(req,res)=>{
    let room=new roomModel(req.body);
    room=await room.save();
    res.send(room)
}

module.exports=postroom;