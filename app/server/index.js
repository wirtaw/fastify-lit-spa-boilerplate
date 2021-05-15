

const fastify = require('fastify')({
  logger: true,
});
const path = require('path');

const configs = require('../../config.js');

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../../dist'),
});

const start = async () => {
  try {
    await fastify.listen(configs.MAIN.PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
