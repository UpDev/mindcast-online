const mongoose = require('mongoose');
const { DATABASE_URL } = require('../config/environment');

mongoose.connect('mongodb+srv://paulo1truester:cocalinho321@cluster0-ro862.mongodb.net/mindcast?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

module.exports = mongoose;

