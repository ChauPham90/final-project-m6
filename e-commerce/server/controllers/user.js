const User = require('../models/user')

exports.signup = (req, res) => {
    const user = new User(req.body);

    console.log(user)
    user.save((err, user) => {
        if (err) { res.status(400).json({ err }) }
        else { res.json({ user }) }

    })

} 