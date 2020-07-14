const express = require("express");
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