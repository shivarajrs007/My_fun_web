const express = require('express')
const router = express.Router();
nodeMailer = require('nodemailer')



const blockchainDb = require('../model/blockSchema')

router.post('/update', (req, res) => {
    let data = []
    let emails = []
    const elements = {
        Email: req.body.email,
        Data: req.body.data
    }
    //console.log(elements);


    async function EmailVarification() {

        const blocks = await blockchainDb.findOneAndUpdate({ Email: elements.Email }, {
            $set: {
                Data: elements.Data
            }
        }, { new: true })
        // console.log(blocks);
        data.push(blocks)
        // console.log(data);




        if (elements.Email != blocks.Email) {
            res.render('signin', {
                msg: 'Email doesn\'t match'
            })
        }

        else {


            // const email = await blockchainDb.find()

            // for (let i = 0; i < email.length; i++) {
            //     emails.push(email[i].Email)
            // }
            // let all_mails = ''
            // for (let i = 0; i < emails.length; i++) {
            //     all_mails = all_mails + emails.pop() + ","
            // }
            // console.log(all_mails);





            // let transporter = nodeMailer.createTransport({
            //     service: "gmail",

            //     auth: {
            //         user: 'shivarajrs007@gmail.com',
            //         pass: 'Shiva3rs'
            //     }
            // });
            // let mailOptions = {
            //     from: '"Shivaraj " <shivarajrs007@gmail.com>', // sender address
            //     to: all_mails, // list of receivers
            //     subject: req.body.subject, // Subject line
            //     text: req.body.body, // plain text body
            //     html: '<b>NodeJS Email Tutorial</b>' // html body
            // };

            // transporter.sendMail(mailOptions, (error, info) => {
            //     if (error) {
            //         return console.log(error);
            //     }
            //     console.log('Message %s sent: %s', info.messageId, info.response);
            //     res.send('mail sended');
            // });



            res.render('update', {
                data: data
            })
        }



    }
    EmailVarification()

})


module.exports = router;