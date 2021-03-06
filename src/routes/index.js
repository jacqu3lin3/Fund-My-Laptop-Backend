const passport = require('passport');
const router = require("express").Router();

const userRoute = require("./userRoute")
const requestRoute = require("./requestRoute")
const paymentRoute = require("./paymentRoute");


router.get("/test", (req, res) => res.send("Yeah it works!"));
router.get('/login/twitter', passport.authenticate('twitter'));  
router.get('/logout', (req, res, next) => {   
	req.logout();   
	res.redirect('/'); 
});  
router.get('/return',    passport.authenticate('twitter', { failureRedirect: '/' }),   
	(req, res, next) => {     res.redirect('/'); 
	
}); 
router.use("/users", userRoute());
router.use("/request", requestRoute());


module.exports = () => {
     router.get("/test", (req, res) => res.send("Yeah it works!"));


     router.use("/users", userRoute());
     router.use("/request", requestRoute());
     router.use("/payment",paymentRoute);




module.exports = router

     return router;
};

