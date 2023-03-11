const nodemailer = require('nodemailer')

const verification = async (req, res) => {
    let Email = req.body.email;
    let Otp = req.body.otp;
    Otp = Otp.toString()
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
        subject: "Your otp is",
        text: Otp
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


module.exports = verification;




