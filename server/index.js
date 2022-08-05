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





app.listen(PORT, () => {
    console.log(`post is running on ${PORT}`)
})