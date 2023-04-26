const nodemailer = require('nodemailer')

const verification = async (req, res) => {
    let Email = req.body.email;
    let Otp = req.body.otp;
    Otp = Otp.toString()
    const date = new Date()
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
        subject: date,
        html: `<h1>Verify Your account<h1/>
        <h2>Your Otp is ${Otp}<h2/>
        
        <h2>Thank you..</h2>
        <h3>Team EasyPg</h3>
        `
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




