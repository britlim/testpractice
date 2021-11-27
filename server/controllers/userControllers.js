const path = require('path');
const models = require('../db/models');

const userController = {};



userController.createUser = (req, res, next) => {
  const newUser = new models.User(req.body);

  newUser
    .save()
    .then(user => {
      res.locals.user = user;
      return next();
    })
    .catch(err => next(err))
}

userController.loginUser = (req, res, next) => {
    
    models.User.findOne({username:req.body.username, password: req.body.password}, (err, user) => {
      console.log('user', user);
      console.log('error', err)
      if (err) return next(err);
      if (user){
        res.locals.user = user;
        return next();
      }
      res.send('user & password combination not valid')
    })
  }

userController.changeUsername = async (req, res, next) => {
	const currentUser = await models.User.findOne({username: req.body.username})

  if (currentUser === null) return res.status(400).send('User does not exist')
  currentUser.username = req.body.newUsername;
  currentUser
    .save()
    .then(user => {
      res.locals.newUser = user;
      return next();
    })
    .catch(err => res.status(400).send('there was an error in change user'))

}

userController.deleteUser = async (req, res, next) => {
    const deleted = await models.User.findOne({username: req.body.username})
    res.locals.deleted = deleted;
    if(deleted){
        models.User.deleteOne(deleted, (err, user) => {
        if (err) return next(err);
        console.log(user)
        return next()
        })
    } else {
     return next({err: 'user not found, could not delete'})

    }
}



module.exports = userController;