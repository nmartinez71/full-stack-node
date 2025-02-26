// Creates the database connection from MongoDB Atlas to our Backend - Neftali

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://nmartinez71:nmartinez71@final-pjt.fltqk.mongodb.net/?retryWrites=true&w=majority&appName=final-pjt')

module.exports = mongoose