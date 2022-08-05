const products = require("./contranst/data.js")
const product = require("./models/productSchema.js")


const DefaultData = () => {
    try {
        product.insertMany(products)
    } catch (error) {
        console.log(error)
    }
}

module.exports = DefaultData