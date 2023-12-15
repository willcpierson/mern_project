const mongoose = require('mongoose');
const Scheme = mongoose.Schema;


const userSchema = Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    }},
        {
            timestamps: true
        }
    )