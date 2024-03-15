const handlerV1 = async (request, reply) => {
  reply.send({ name: 'UserName' });
};

module.exports = { handlerV1 };
