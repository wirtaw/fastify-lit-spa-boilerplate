'use strict';

const fastify = require('fastify')({
  logger: true,
});

const configs = require('../config');

// eslint-ignore
fastify.get('/', async (request, reply) => {
  return {hello: 'world'};
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
