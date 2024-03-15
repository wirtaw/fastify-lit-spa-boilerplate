const fastify = require('fastify')({
  logger: true,
});
const path = require('path');
const router = require('./routes/v1/users.js');

const configs = require('../../config.js');

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../../dist'),
});

fastify.register(router, { logLevel: 'warn', prefix: '/v1' });

const start = async () => {
  try {
    await fastify.listen(configs.MAIN.PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
