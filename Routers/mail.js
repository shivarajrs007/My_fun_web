var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 4000;
app.get('/', function (req, res) {
    res.render('index');
});
app.post('/send-email', function (req, res) {
    let transporter = nodeMailer.createTransport({
        service: "gmail",

        auth: {
            user: 'shivarajrs007@gmail.com',
            pass: 'Shiva3rs'
        }
    });
    let mailOptions = {
        from: '"Shivaraj " <shivarajrs007@gmail.com>', // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.body, // plain text body
        html: '<b>NodeJS Email Tutorial</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.send('mail sended');
    });
});

function mail() {
    let transporter = nodeMailer.createTransport({
        service: "gmail",

        auth: {
            user: 'shivarajrs007@gmail.com',
            pass: 'Shivrs'
        }
    });
    let mailOptions = {
        from: '"Shivaraj " <shivarajrs007@gmail.com>', // sender address
        to: "Shivaayrs007@gmail.com", // list of receivers
        subject: "text", // Subject line
        text: "my body", // plain text body
        html: '<b>NodeJS Email Tutorial</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.send('mail sended');
    });
}
mail()
app.listen(port, function () {
    console.log('Server is running at port: ', port);
});
