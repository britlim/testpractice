const cookieController = {};

/**
* setCookie - set a cookie with a random number
*/
// cookieController.setCookie = (req, res, next) => {
//   // write code here
//   res.cookie('codesmith', 'hi');
//   res.cookie('secret', `${Math.floor(Math.random() * 99)}`);
//   return next();
// }

/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  // write code here
  // console.log(res.locals.user_id);
  // ObjectID { _bsontype: 'ObjectID', id: 'a\x8C;®ç\x07\x87Bò\x13ö4' }
  res.cookie('ssid', res.locals.user_id, {httpOnly : true});
  return next();
}

module.exports = cookieController;