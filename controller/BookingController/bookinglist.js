const bookingmodel=require('../../db/schema/booking')

const bookinglist=async(req,res)=>{
    let data=await bookingmodel.find();
    res.status(200).json(data);
}

module.exports=bookinglist;