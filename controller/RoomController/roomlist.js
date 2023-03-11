const roomModel=require('../../db/schema/room')


const getAllroom=async(req,res)=>{
    let room=await roomModel.find();;
    res.send(room);
}

module.exports=getAllroom;
