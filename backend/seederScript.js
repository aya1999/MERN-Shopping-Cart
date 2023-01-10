//to use environmental variables??
require('dotenv').config()

//import list of products
const productsData = require('./data/products')
//import database connection
const connectDB = require('./config/db')
//import the schema for DB
const Product = require('./models/Product')

connectDB()

//async function that deletes and then inserts items into DB
const importData = async () => {
    try {
        await Product.deleteMany({})
        await Product.insertMany(productsData)

        console.log("Imported data successfully")

        process.exit()
    }
    catch (error) {
        console.error("Import Unsuccessfull")
        console.error(error)
        process.exit(1)
    }
}

//run function immediately 
importData()

//this script is run through the terminal npm run data:import