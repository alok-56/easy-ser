const nodemailer = require('nodemailer');

const Cancelnotifyowner = (req, res) => {
    let Email = req.body.email;
    let bookingid = req.body.id;
    console.log(bookingid)
    let dateid = new Date().getDate;
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "easypeasy11746@gmail.com",
            pass: "eyqunwdhrpkbzvwg"
        }
    })
    const mailOptions = {
        from: "easypeasy11746@gmail.com",
        to: Email,
        subject: dateid,
        html: '<h1>Hello Sir!</h1><p>Your Room Booked By <b>Alok kumar</b> is cancelled</p>'
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

module.exports = Cancelnotifyowner;