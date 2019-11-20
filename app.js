const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose')




const app = express();
app.set('view engine', 'ejs');
app.use(expressLayout)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))

//DATABASE
const db = require('./model/Config').dbUrl;
mongoose.connect("mongodb://localhost/blockchain", { useFindAndModify: false })
    .then(() => {
        console.log('mongodb Connected...');

    }).catch((err) => {
        console.log('mongoconnection errr' + err);

    })


app.use("/", require('./Routers/home'))
app.use('/user', require('./Routers/user'))

app.use('/signin', require('./Routers/signin'))
app.use('/signup', require('./Routers/signup'))
app.use('/forget', require('./Routers/forget'))

app.use('/welcome', require('./Routers/welcome'))
app.use('/Parts', require('./Routers/Parts'))
app.use('/product', require('./Routers/product'))
app.use('/Admin', require('./Routers/Admin'))
app.use('/dashboard', require('./Routers/dashboard'))
app.use('/back', require('./Routers/back'))



//ADMIN DATABASE
const AdminDB = require('./model/AdminSchema')


async function Admin() {
    const admin = {
        Name: "Admin",
        Email: "Admin@admin",
        password: "Admin",
        ID: "ADM123"
    }
    let newBlock = new AdminDB(admin)
    newBlock.save()
        .then(doc => {
            // res.render('sucussful', {
            //     suc: 'Register Successfully',
            //     id: id
            // })
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        })
}
Admin()



port = process.env.PORT || 4000
app.listen(port, console.log('listening port' + port))