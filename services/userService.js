const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  age: Joi.number().min(18).max(120).required(),
  email: Joi.string().email().required(),
});

async function createUser(data) {
  try {
    await schema.validateAsync(data);
    console.log("User created");
    const userCreated = data;
    return userCreated;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
}

module.exports = {
  createUser,
};
