// const nodemailer = require('nodemailer')

// const notify = async (req, res) => {
//     let Email = req.body.email;
//     let id = req.body.id;
//     // let Otp = req.body.otp;
//     // Otp = Otp.toString()
//     const transport = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: "dev6com@gmail.com",
//             pass: "quvexuittntmvvhg"
//         }
//     })
//     const mailOptions = {
//         from: "dev6com@gmail.com",
//         to: Email,
//         subject: id,
//         text: `Hello sir,${<br></br>} your last Date of booking is completed..${<br></br>}
//         Pay your Monthly rent as soon as possible..${<br></br>}${<br></br>} Note:you have 5 days to pay this month
//         rent..otherwise your booking may cancel.. ${<br></br>}${<br></br>} ${<br></br>}${<br></br>} ${<br></br>}${<br></br>}
//         regrads Third home `
//     }
//     transport.sendMail(mailOptions, (err, info) => {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             res.send(info)
//         }
//     })

// }

// module.exports = notify;


