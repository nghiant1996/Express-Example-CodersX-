var db = require('../db')
module.exports.requireAuth= (req, res, next)=>{
  if(!req.cookies.userId ){
    res.redirect('/auth/login');
    return;
  }
  var user = db.get('users')
               .find({id : req.cookies.userId}).value();
  
  if(!user){
    res.redirect('/auth/login');
    return;
  }
  
  // res.locals.user = user
  next();
}

// module.exports.verifyAdmin= (req,res,next)=>{
//   var user = db.get('user').find({id: req.cookies.userId}).value();
//   if(user.isAdmin === true){
    
//   }
              
// }