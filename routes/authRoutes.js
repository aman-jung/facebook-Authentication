const passport = require('passport');

module.exports =(app)=>{

app.get('/api/current_user',(req,res)=>{
	res.send(req.user);
});

app.get('/auth/facebook',
	passport.authenticate('facebook', { scope:['user_friends', 'manage_pages']
}));

app.get('/auth/facebook',passport.authenticate('facebook', {scope : 'facebookID'}));

app.get('/auth/facebook/callback',
	passport.authenticate('facebook'),
	(req,res)=>{
		res.redirect('/surveys');
	});



app.get('/api/logout',(req,res)=>{
	req.logout();
	res.redirect("/");
});
};