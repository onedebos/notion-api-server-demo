// Handles the business Logic
const bootcampModel = require("../models/bootcamp.model");

const bootcampController = {
  getAllCourses: async () => await bootcampModel.getCourses(),

  addSubscriberToDB: async ({ name, email }) => {
    const { isUserInDB } = await bootcampModel.findSubscriberByEmail({
      name,
      email,
    });

    // check if the E-mail exists
    if (isUserInDB) {
      return {
        error: "That E-mail already exists in our mailing list.",
      };
    }

    // if the E-mail doesn't already exist, add to Notion DB
    const response = await bootcampModel.addSubscriberToDB({ name, email });

    // if something goes wrong, send an error message
    if (response.error) {
      return {
        error: response.error,
      };
    }

    // if adding a user is successful
    return { message: "Successfully added to the Bootcamp mailing list" };
  },

  findSubscriberByEmail: async ({ email }) =>
    await bootcampModel.findSubscriberByEmail({ email }),
};

module.exports = bootcampController;
