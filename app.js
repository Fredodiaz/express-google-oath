const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const cors = require('cors')
const dotenv = require('dotenv')
const express = require('express')
const morgan = require('morgan')
const passport = require('passport')
require('./middleware/passport');

// Connect DB
const connectDB = require('./config/db')
connectDB()

// Load DB Config + Env Variables
dotenv.config({ path: './config/config.env'})

// Server Initializer
const app = express()

// CORS-enabled For All Origins
app.use(cors())

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// Parse app/json
app.use(bodyParser.json())

// Shows Requests In Console If In Development
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// For An Actual App Configure With An Expiration Tme, Better Keys, Proxy + Secure
app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  }))

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

// ROUTES
app.use('/', require('./routes/google')) // Google
app.use('/api', require('./routes/users')); // Users

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))