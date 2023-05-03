const nodemailer = require('nodemailer')

const Contact = async (req, res) => {
    let Email = req.body.email;
    let name = req.body.name;
    let problem = req.body.complain;

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
        html: `<h2>NEW USER WANT TO CONTACT US!</h2>
        <h3>User Information</h3>
        <br></br>

        <p>Name :- ${name}</p>
        <p>Email :- ${Email}</p>
        <p>Problem :- ${problem}</p>
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

module.exports = Contact;
