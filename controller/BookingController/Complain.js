const nodemailer = require('nodemailer')

const Complain = async (req, res) => {
    let Email = req.body.email;
    let name = req.body.name;
    let number = req.body.Number;
    let bookingid = req.body.bookingid;
    let complain = req.body.complain;
    const date = new Date()

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "easypeasy11746@gmail.com",
            pass: "eyqunwdhrpkbzvwg"
        }
    })
    const mailOptions = {
        from: Email,
        to: "easypeasy11746@gmail.com",
        subject: date,
        html: `<h2>NEW COMPLAIN FROM ${name}</h2>
        <h3>Complain Information</h3>
        <br></br>

        <p>Name :- ${name}</p>
        <p>Number :- ${number}</p>
        <p>Email :- ${Email}</p>
        <p>Booking_id :- ${bookingid}</p>
        <p>Complain :- ${complain}</p>
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

module.exports = Complain;
