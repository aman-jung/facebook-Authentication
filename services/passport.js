const mongoose = require('mongoose');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const Users = mongoose.model('users');
const keys = require('../config/keys');
mongoose.Promise = global.Promise;

passport.serializeUser((user,done)=>{
	done(null,user._id);
});

passport.deserializeUser((id,done)=>{
	Users.findById(id).then(user=>{
		done(null,user);
	});
});

passport.use(new FacebookStrategy({
	clientID:keys.FACEBOOK_APP_ID,
	clientSecret:keys.FACEBOOK_APP_SECRET,
	callbackURL:'http://localhost:3000/auth/facebook/callback'
},(token,refreshToken,profile,done)=>{
	Users.findOne({facebookID:profile.id}).then(existingUser=>{
		if(existingUser){
			return done(null,existingUser)
		}
		new Users({facebookID:profile.id})
		.save()
		.then(user=>done(null,user));
	});
}))