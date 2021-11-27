const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');

const PORT = 3000;

const app = express();
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../'))); //serves the index.html

//GET request
app.post("/user/create", userController.createUser, cookieController.setSSIDCookie, (req, res) => {
 //do something here
    return res.status(200).json(res.locals.user);
});

app.post("/user/login", userController.loginUser, cookieController.setSSIDCookie, (req, res) => {
  return res.status(200).json(res.locals.user);
})

app.put("/user/update", userController.changeUsername, (req,res) => {
    return res.status(200).json(res.locals.newUser);
})

app.delete("/user/delete", userController.deleteUser, (req,res) => {
   return  res.status(200).json(res.locals.deleted);
})


/**
 * 404 handler
 */
 app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Internal Server Error');

});


app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;