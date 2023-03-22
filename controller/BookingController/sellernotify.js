const nodemailer = require('nodemailer')

const Sellernotify = async (req, res) => {
    let Email = req.body.ownerEmail;
    let userid = req.body.usersId;
    let bookingid = req.body.book;
    let name = req.body.name;
    let number = req.body.number;
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "easypeasy11746@gmail.com",
            pass: 'eyqunwdhrpkbzvwg'
        }
    })
    const mailOptions = {
        from: "easypeasy11746@gmail.com",
        to: Email,
        subject: "hello",
        text: `Hello sir, New member Booked your room
        Booking-Id : ${bookingid}
        User-id : ${userid}
        name : ${name}
        number : ${number}
        
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

module.exports = Sellernotify;


