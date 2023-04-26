const nodemailer = require('nodemailer')

const Sellernotify = async (req, res) => {
    let Email = req.body.ownerEmail;
    let userid = req.body.usersId;
    let bookingid = req.body.book;
    let name = req.body.name;
    let number = req.body.number;
    const date = new Date()
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
        subject: date,
        html: `<h1>Hello sir/Mam</h1>,<h3>Your Room is Booked by <b>${name}</b><h3/> 
        <h2>User Information</h2>

        <p>Booking-Id : ${bookingid}<p>
        <p>User-id : ${userid}<p>
        <p>name : ${name}<p>
        <p>number : ${number}<p>

        <h2>Thank you..</h2>
        <h3>Team EasyPg</h3>
        
        `
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


