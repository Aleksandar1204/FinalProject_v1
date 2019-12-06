const mongoose = require('mongoose');

const User = mongoose.model(
    'users',
    new mongoose.Schema({
        first_name: String,
        last_name: String,
        email: String,
        password: String
    })
);