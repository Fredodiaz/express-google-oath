// Native Imports
const express = require('express');
const router = express.Router();

// Middleware
const passport = require('passport')
const { isLoggedIn } = require('../middleware/oAuth')

// Controllers
const { home, good, failed, logout, callback } = require('../controllers/google')


// Endpoints
router.get('/', home)
router.get('/failed', failed)
router.get('/good', isLoggedIn, good)
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }), callback)
router.get('/logout', logout)

module.exports = router;