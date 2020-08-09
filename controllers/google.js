// @desc Shows Example Home Page
// @route POST /
// @access PUBLIC
exports.home = (req, res) => {
    res.send('Example Home Page!')
}

// @desc Welcomes User => Required: Google Sign In
// @route POST /good
// @access PRIVATE
exports.good = (req, res) => {
    res.send(`Welcome ${req.user.displayName}`)
}

// @desc Shows User Login Fail
// @route POST /fail
// @access PRIVATE
exports.failed = (req, res) => {
    res.send('You failed to log in!')
}

// @desc Logs User Out => Redirect: Home Page
// @route POST api/users/create
// @access PUBLIC
exports.logout = (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
}

// @desc Redirects Valid User => Required: receiver username
// @route POST /google/callback
// @access PUBLIC
exports.callback = (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/good');
}