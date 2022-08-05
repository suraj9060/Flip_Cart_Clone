const mongoose = require("mongoose")

const connection = (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.p61jv8a.mongodb.net/?retryWrites=true&w=majority`;
    try {
        mongoose.connect(
          URL,
          { useUnifiedTopology: true, useNewUrlParser: true }
        ).then(()=>console.log("db is connected"))
    } catch (error) {
        console.log(error)
    }
 }

module.exports = connection