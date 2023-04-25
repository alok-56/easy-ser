const BookingModel = require('../../db/schema/booking')


const bookupdateback = async () => {
    const data = await BookingModel.find();
    for (var i = 0; i < data.length; i++) {
        var date1 = data[i].time;
        var date2 = new Date();
        var Difference_In_Time = date2.getTime() - date1;
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        if (Difference_In_Days > 30) {
            if (data[i].status != 'cancelled') {
                let id = data[i]._id;
                pay = "Due"
                let update = await fetch(`https://easy-ser.vercel.app/roombooking/updatebooking`, {
                    method: "put",
                    body: JSON.stringify({ id, pay }),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                update = await update.json();
                console.log(update)
            }
            if (Difference_In_Days > 35) {
                let id = data[i]._id;
                let pay = "Due";
                let status = "Cancelled"
                let update = await fetch(`https://easy-ser.vercel.app/roombooking/updatebooking`, {
                    method: "put",
                    body: JSON.stringify({ id, status, pay }),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                update = await update.json();
                if (update.matchedCount > 0) {
                    // setBookid(data[i]._id)
                    sendCancelemail(data[i].email, data[i]._id);
                    ownerCancelemail(data[i].ownerEmail, data[i]._id);

                    console.log(update)
                }
            }
        }

    }

}

const sendCancelemail = async (email, id) => {
    let data = await fetch(`https://easy-ser.vercel.app/roombooking/book/cancel`, {
        method: "post",
        body: JSON.stringify({ email, id }),
        headers: {
            'content-type': 'application/json'
        }
    });

    data = await data.json();
    if (data) {
        console.log("send")
    }
}

const ownerCancelemail = async (email, id) => {
    console.log(email)
    let data = await fetch(`https://easy-ser.vercel.app/roombooking/book/cancelowner`, {
        method: "post",
        body: JSON.stringify({ id, email }),
        headers: {
            'content-type': 'application/json'
        }
    });

    data = await data.json();
    if (data) {
        console.log("send")
    }
}


module.exports = bookupdateback



// for (var i = 0; i < date.length; i++) {
//     var date1 = data[i].time;
//     var date2 = new Date();
//     var Difference_In_Time = date2.getTime() - date1;
//     var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
//     console.log(Difference_In_Days)
//     if (Difference_In_Days > 30) {
//         if (data[i].status != 'cancelled') {
//             let id = data[i]._id;
//             let update = await fetch(`https://easy-ser.vercel.app/roombooking/updatebooking`, {
//                 method: "put",
//                 body: JSON.stringify({ id, pay }),
//                 headers: {
//                     'content-type': 'application/json'
//                 }
//             })
//             update = await update.json();
//             if (Difference_In_Days > 35) {
//                 let id = data[i]._id;
//                 let update = await fetch(`https://easy-ser.vercel.app/roombooking/updatebooking`, {
//                     method: "put",
//                     body: JSON.stringify({ id, status, pay }),
//                     headers: {
//                         'content-type': 'application/json'
//                     }
//                 })
//                 update = await update.json();
//                 if (update.matchedCount > 0) {
//                     setBookid(data[i]._id)
//                     sendCancelemail();
//                     ownerCancelemail();
//                 }
//             }
//         }
//     }
// }