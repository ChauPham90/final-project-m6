const User = require('../models/user')

exports.signup = (req, res) => {
    user = new User(req.body);
    user.save((err, user) => {
        if (err) { res.status(400).json({ err }) }
        else { res.json({ user }) }
        console.log(req.body)
    })

} 