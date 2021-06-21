const fastify = require("fastify")({
  logger: true,
});

// Controllers
const bootcampController = require("../controllers/bootcamp.controller");

// Routes
fastify.get("/", async (req, reply) => {
  try {
    const res = await bootcampController.getAllCourses();
    reply.type("application/json").code(200);
    return { data: res };
  } catch (error) {
    reply.type("application/json").code(400);
    return { data: error };
  }
});


fastify.post("/", async (req, reply) => {
  try {
    const { name, email } = req.body;
    const res = await bootcampController.addSubscriberToDB({ name, email });
    reply.type("application/json").code(200);
    return { data: res };
  } catch (error) {
    reply.type("application/json").code(400);
    return { data: error };
  }
});

module.exports = fastify;
