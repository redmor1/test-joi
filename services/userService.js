const Joi = require("joi");

async function validateUserData(data) {
  const schema = Joi.object().keys({
    name: Joi.string().min(2).max(100).required(),
    age: Joi.number().min(18).max(120).required(),
    email: Joi.string().email().required(),
  });
  const { error } = schema.validate(data);
  if (error) {
    return error.details[0].message;
  }
  return null;
}

async function createUser(data) {
  const validationError = validateUserData(data);
  if (validationError) {
    throw new Error(`Validation Error: ${validationError}`);
  }
  try {
    const userCreated = data;
    return userCreated;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createUser,
};
