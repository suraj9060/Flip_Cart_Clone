const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const PORT = 8000
const app = express()
const connection = require("./dataBase/db.js")
const cors = require("cors")
dotenv.config()
const USER = process.env.USER
const PASS = process.env.PASSWORD
connection(USER,PASS)

// const API =
//     `mongodb+srv://flipkart:flipkart@cluster0.p61jv8a.mongodb.net/?retryWrites=true&w=majority`;
//      mongoose.connect(API , {useUnifiedTopology:true ,useNewUrlParser:true}).then(() => {
//       console.log("data base is connected")
      
//   })



app.listen(PORT, () => {
    console.log(`post is running on ${PORT}`)
})