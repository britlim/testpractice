const express = require('express');
const userController = require('../controllers/userControllers');
const router = express.Router();


//GET request
router.post("/create", userController.createUser, (req, res) => {
 //do something here
    res.status(200).json(res.locals.user);
});

router.post("/login", userController.loginUser, (req, res) => {
  res.status(200).json(res.locals.user);
})

router.put("/update", userController.changeUsername, (req,res) => {
    res.status(200).json(res.locals.newUser);
})

router.delete("/delete", userController.deleteUser, (req,res) => {
    res.status(200).json(res.locals.deleted);
})

module.exports = router;