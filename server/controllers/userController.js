const path = require('path');
const models = require('../db/models.js');
const User = require('../db/models')

const userController = {

createUser = (req, res, next) => {
  const { username, password } = req.body;
  User.create({ username, password })
    .then(data => {
      res.locals.user_id = data.id;
      return next();
    })
    .catch(err => {
      res.send({ error: err });
      return next('userController.createUser: Could not create user' + JSON.stringify(err));
    })
},


loginUser = (req, res, next) => {
  const { username, password } = req.body;
  // User.findOne({ username, password })
  User.findOne({ username: username })
    .then(data => { 
      // If password matches 
      if (password === data.password) {
        res.locals.user_id = data.id;
        return next();
      }
      // If PW doesn't match
      else {
        return next('userController.loginUser: Passwords did not match') 
      }
    })
    .catch(err => {
      return next('userController.loginUser: Could not find user in DB' + JSON.stringify(err));
    })
},


changeUsername(req, res, next) {
	const currentUser = req.params.username;
  const newName = req.body.currentUser;
  User.updateOne({ currentUser: currentUser }, { currentUser: newName }, (err, user) => {
    if (err) {
      return next({
        log: 'userController.changeUsername: user could not be updated',
      });
    }
    res.status(200).send(user);
  });
  return next();
},

deleteUser(req, res, next) {
    const deleted = req.params.username;
    User.findOneandDelete({username: deleted}, (err, user) => {
      if(err) {
        return next({
          log: 'userController.deleteUser: Student could not be deleted',
          status: 400,
          message: { err: 'An error occurred' },
        });
      }
      res.status(200).send(`Success: ${student} has been deleted`);
    });
    return next();
  }
};



module.exports = userController;