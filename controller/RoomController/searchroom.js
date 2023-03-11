const roomModel=require('../../db/schema/room')

const Searchroom=async(req,res)=>{
    let room=await roomModel.find({
        "$or":[
            {district:{$regex:req.params.key}},
            {roomname:{$regex:req.params.key}},
            {state:{$regex:req.params.key}}
        ]
    })
    res.send(room)
}

module.exports=Searchroom;