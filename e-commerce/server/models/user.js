const mongoose = require('mongoose');
const uuid = require('uuid');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        strim: true,
        required:true

    },
    email: {
        type: String,
        strim: true,

        unique: true
    },
    // tranfer plain text psw to hash
    hased_password: {
        type: String

    },
    about: {
        type: String,
        trim: true
    },
    //add  more string to psw
    salt: String,
    role: {
        type: Number,
        default: 0
    },
    history: {
        type: Array,
        default: []
    }
}, { timestamps: true })

//virtual field
userSchema.virtual('password')
    .set(function (password) {
        this._password = password
        this.salt = uuid()
        this.hased_password = this.keepSecurity(password)
    })
    .get(function () { return this._password })

//add method to schema
userSchema.method = {
    keepSecurity: function (password) {
        if (!password) return '';
        try {
            const hmac = crypto.createHmac('sha-1', this.salt);
            hmac.update(password);
            hmac.digest('hex');
            console.log(hmac.digest('hex'));
        } catch (err) {
            console.log(err.message)
            return ''
        }
    }
}
module.exports = mongoose.model('User', userSchema)
