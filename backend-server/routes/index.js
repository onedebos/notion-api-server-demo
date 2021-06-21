const fastify = require("fastify")({
  logger: true,
});

// CONTROLLERS
const bootCampController = require("../controllers/bootcamp.controller");

// ROUTES
fastify.get("/", async (req, reply) => {
  try {
    const res = await bootCampController.getAllCourses();
    reply.type("application/json").code(200);
    return { res };
  } catch (error) {
    reply.type("application/json").code(400);
    return { error };
  }
});

module.exports = fastify;
