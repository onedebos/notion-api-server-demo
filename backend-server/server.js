const fastify = require('./routes')

  fastify.listen(3000, (err, address) => {
    if (err) throw err
  })
  