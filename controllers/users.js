const User = require('../models/user');

// @desc Gets Users => Required: receiver username
// @route GET api/users
// @access PUBLIC
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({error: 'Server Error'});
    }
}

// @desc Gets Users => Required: receiver username
// @route POST api/users/create
// @access PUBLIC
exports.addUsers = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        return res.status(200).json({
            success: true,
            data: user
        });
    } catch(err) {
        if(err.code === 11000) {
            console.log(err);
            return res.status(400).json({error: 'This user already exists'});
        }
        console.error(err);
        res.status(500).json({error: 'Server Error'});
    }
}