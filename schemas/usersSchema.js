const loginSchema = {
    type: 'object',
  properties: {
    email: { type: 'string' },
    password: { type:'string' },
  },
  required: ['name'],
  additionalProperties: false,
}

module.exports = { loginSchema };