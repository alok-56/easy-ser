const nodemailer = require('nodemailer')

const Cancelnotify = async (req, res) => {
    let Email = req.body.email;
    let bookingid = req.body.id;
    let dateid = new Date();
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
        html: `
        <h1>Hello Sir/Mam!</h1><p>Your Room Booked is <b></b> is cancelled</p>
        <h2>Thank you..</h2>
        <h3>Team EasyPg</h3>`
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

module.exports = Cancelnotify;


