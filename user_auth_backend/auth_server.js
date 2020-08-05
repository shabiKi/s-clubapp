const express = require("express");
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// set up express "create new express app"

const app = express();

// middleware "interact with any route of express"

app.use(express.json());
app.use(cors());

// starting up server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));

// Send Email

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('../../src/components/ContactUs', () => { 
    resizeBy.send('Welcom to my form')
})

app.post('/api/form', (req, res) => { 
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'ma9558454@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
        
            <h3>User's information</h3>
            <ul>
                <li> Name: ${data.name}</li>
                <li> Email: ${data.email}</li>
            </ul>

            <h3> Message </h3>
            <p>${data.message}</p>

        `
    };

    smtpTransport.sendMail(mailOptions, (error, response) =>{ 
        if (error) {
            res.send(error)
        }
        else { 
            res.send('Success')
        }
    })

    smtpTransport.close();
})

// set up mongoose

mongoose.connect("mongodb://localhost/sportsclubapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, (err) => { 
        if (err) throw err;
        console.log("MongoDB connection established");
});

// set up routes
app.use("/users", require("./routes/userRouter"));
