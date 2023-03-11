const nodemailer = require('nodemailer')

const Booknotify = async (req, res) => {
    let Email = req.body.email;
    let name = req.body.ownername;
    let number = req.body.ownerNumber;
    let ownerid = req.body.sellerId;
    let bookingid = req.body.book;

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
        subject: "hello",
        text: `
        Hello sir/Mam,

        you have successfully booked your room..
        Owner-id : ${ownerid} 
        OwnerName : ${name}
        OwnerNumber : ${number}
     
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

module.exports = Booknotify;


