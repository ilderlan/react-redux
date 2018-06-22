const mongoose = require('mongoose')
//tirar mensagem de advertencia
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/todo')