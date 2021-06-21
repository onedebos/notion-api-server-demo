const fastify = require('./routes')

  fastify.listen(5000, (err, address) => {
    if (err) throw err
  })
  