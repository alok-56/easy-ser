const nodemailer=require('nodemailer');

const Cancelnotifyowner=(req,res)=>{
    let Email = req.body.email;
    let bookingid = req.body.id;
    console.log(bookingid)
    let dateid = new Date().getDate;
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "dev6com@gmail.com",
            pass: "quvexuittntmvvhg"
        }
    })
    const mailOptions = {
        from: "dev6com@gmail.com",
        to: Email,
        subject: dateid,
        text: `
        Hello sir,
                 Your booking is cancelled..
        To Know more about it..Talk to our Technical department..
        Booking-Id : ${bookingid} 
    
        Thank you..
        regrads Third home `
    }
    transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(info)
        }
    })


}

module.exports=Cancelnotifyowner;