const { handlerV1 } = require('../../handlers/user_handler_v1.js');

module.exports = function (fastify, opts, done) {
  fastify.get('/user', handlerV1);
  done();
};
