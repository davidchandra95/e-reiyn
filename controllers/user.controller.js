const { User } = require('../models/');
const authService = require('../services/auth.service');
const { to, ReE, ReS } = require('../services/util.service');

const create = async (req, res) => {
   const body = req.body;

   if (!body.email) {
      return ReE(res, 'Please enter an email to register.');
   } else if (!body.password) {
      return ReE(res, 'Please enter a password to register.');
   } else {
      let err, user;

      [err, user] = await to(authService.createUser(body));

      if (err) return ReE(res, err, 422);

      return ReS(res, { message: 'Successfully created new user.', user: user.toWeb(), token: user.getJWT() }, 201);
   }
}

module.exports.create = create;