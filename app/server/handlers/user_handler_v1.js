const handler_v1 = async (request, reply) => {
  reply.send({ name: 'UserName' });
};

module.exports = { handler_v1 };
