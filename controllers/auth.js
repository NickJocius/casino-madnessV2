/*
    auth.js
    Controller file for authentication routes
*/

const User = require('../models/user');

exports.createOrUpdateUser = async (req, res) => {
    const { name, email } = req.user;
    // update
    const user = await User.findOneAndUpdate({ email: email }, { name: name }, { new: true });

    if (user) {
        console.log("user updated");
        res.json(user);
    } else {
        const newUser = await new User({
            email, name
        }).save();
        console.log("User created");
        res.json(newUser);
    }
};