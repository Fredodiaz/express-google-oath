// Native Imports
const express = require('express');
const router = express.Router();

// Controllers
const { getUsers, addUsers } = require('../controllers/users')

// Endpoints
router.get('/', getUsers)
router.post('/', addUsers)

module.exports = router;