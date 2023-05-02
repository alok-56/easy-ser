const nodemailer = require('nodemailer')

const Datebooknotify = async (req, res) => {
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
        <h1>Hello Sir/Mam!</h1><p>Your Booking having ID <b>${bookingid}</b> is reached lastdate.</p>
        <p>Kindly pay within 5 Days otherwise it will cancelled automatically</p>
        <br>
        <p>NOTE : If you have any problem then you can talk to owner</p>
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

module.exports = Datebooknotify;


