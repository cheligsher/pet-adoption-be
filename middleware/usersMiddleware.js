const Ajv = require("ajv");
const ajv = new Ajv();

function validateBody(loginSchema) {
  return (req, res, next) => {
    const valid = ajv.validate(loginSchema, req.body);
    if (!valid) {
      res.status(400).send(ajv.errors[0].message);
      return;
    }
    next();
  };
}

module.exports = {
  validateBody,
};
