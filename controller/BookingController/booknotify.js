const nodemailer = require('nodemailer')

const Booknotify = async (req, res) => {
    let Email = req.body.email;
    let name = req.body.ownername;
    let number = req.body.ownerNumber;
    let ownerid = req.body.sellerId;
    let track = 'https://www.google.com/maps?q=21.220296,81.337937&z=17&hl=en'
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
        html: `<H1>Hello sir/Mam!</h1><h3>You have sucessfully booked your room</h3>
        <h2>Owner Information</h2>
        <br></br>

        <p>Owner_id :- ${ownerid}</p>
        <p>OwnerName :- ${name}</p>
        <p>OwnerNumber :- ${number}</p>
        <a href=${track}>Track Location of owner</>
        
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

module.exports = Booknotify;


