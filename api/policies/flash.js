// flash.js policy
module.exports = function(req, res, next) {

  res.locals.messages = { success: [], error: [], warning: [] };

  if(!req.session.messages) {
  	//console.log('Initialize');
    req.session.messages = { success: [], error: [], warning: [] };
    return next();
  }
  //console.log('Cloning from session');
  res.locals.messages = _.clone(req.session.messages);

  // Clear flash
  req.session.messages = { success: [], error: [], warning: [] };
  return next();

};