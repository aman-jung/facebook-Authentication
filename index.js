const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

const app = express();
app.use(cookieSession({
	maxAge:30*24*60*60*1000,
	keys:[keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
mongoose.connect(keys.clientURI);
app.listen(4000,()=>{
	console.log("Server is up and running");
})