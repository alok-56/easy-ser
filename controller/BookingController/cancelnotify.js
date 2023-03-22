const nodemailer = require('nodemailer')

const Cancelnotify = async (req, res) => {
    let Email = req.body.email;
    let bookingid = req.body.id;
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

module.exports = Cancelnotify;


