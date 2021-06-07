const { handler_v1 } = require('../../handlers/user_handler_v1');

module.exports = function (fastify, opts, done) {
  fastify.get('/user', handler_v1);
  done();
};
