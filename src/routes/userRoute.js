const router = require("express").Router();
const UserCtrl = require("./../controllers/UserController");

module.exports = () => {
     router.post("/", UserCtrl.create)
     router.post("/login", UserCtrl.login);
     router.put("/update/:id", UserCtrl.update);

     return router;
};