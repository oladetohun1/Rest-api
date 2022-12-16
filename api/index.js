const express = require("express");
const app = express();
// create mongodb connection
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
dotenv.config()

mongoose
    .connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
    })
    .then(() => console.log("DB connection is successfull"))
    .catch((err) => {
        console.log(err);
    });
app.use(express.json())

app.use("/api/auth", authRoute);

app.listen(8800, ()=>{
    console.log("Backend server is running")
});