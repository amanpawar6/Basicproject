var nodemailer = require('nodemailer');

 function email(req,res,next) {
    var id=req.body;
    var email=id.email;

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'ananyanayar221@gmail.com',
            pass: 'ananya.n7'
        }
    });

    var mailOptions = {
        to: email,
        subject: 'register',
        text: `you sucessfully registered`
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('information: ' + info.response);
        res.send("mail sent");
    }
    });
}



module.exports = {
    email
}