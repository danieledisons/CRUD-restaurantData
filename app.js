const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

// mongoose.connect('mongodb://localhost:27017/restDetails',{
// })
// const db = mongoose.connection;
// db.on('error',console.error.bind(console, "connection error"));
// db.once("open", function(){
//     console.log("connected to mongoose")

// });

//----------------------------------------------------------------//

const restaurantRouter = require('./router/restaurant');
const PORT = process.env.PORT ||3000;

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use("/restaurant",restaurantRouter)


server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
