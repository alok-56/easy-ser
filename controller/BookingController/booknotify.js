const nodemailer = require('nodemailer')

const Booknotify = async (req, res) => {
    let Email = req.body.email;
    let name = req.body.ownername;
    let number = req.body.ownerNumber;
    let ownerid = req.body.sellerId;
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
        html: `<H1>Hello sir/Mam!</h1><p>You have sucessfully booked your room</p>
        <h1>Owner Information</h1>
        <h2>Owner_id:-${ownerid}</h2>
        <h2>OwnerName:-${name}</h2>
        <h2>OwnerNumber:-${number}</h2>
     
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

module.exports = Booknotify;


