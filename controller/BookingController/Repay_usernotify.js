const nodemailer = require('nodemailer')

const Repay_usernotify = async (req, res) => {
    let Email = req.body.email;
    let bookingid = req.body.book;
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
        html: `<h1>Hello sir/Mam!</h1><h3>You have sucessfully Paid This Month Rent.</h3>
        <h2>Payment Information</h2>
        <br></br>

        <p>Booking_id :- ${bookingid}</p>
       
        <br></br>
     
        <h2>Thank you..</h2>
        <h3>Team EasyPg</h3> `
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

module.exports = Repay_usernotify;
