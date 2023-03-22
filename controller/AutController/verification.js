const nodemailer = require('nodemailer')

const verification = async (req, res) => {
    let Email = req.body.email;
    let Otp = req.body.otp;
    Otp = Otp.toString()
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
        subject: "Your otp is",
        text: Otp
    }
    transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(info)
        }
    })

}


module.exports = verification;




