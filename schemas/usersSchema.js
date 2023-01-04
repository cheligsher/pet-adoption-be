const loginSchema = {
    type: 'object',
  properties: {
    email: { type: 'string' },
    password: { type:'string' },
  },
  required: ['email', 'password'],
  additionalProperties: false,
}

const signUpSchema = { 
    type: 'object',
    properties: {
        email: { type:'string' },
        phone: { type:'string' },
        password: { type:'string' },
        firstName: { type:'string' },
        lastName: { type:'string' },
    },
    required: ['email', 'phone', 'password', 'firstName', 'lastName'],}

module.exports = { loginSchema, signUpSchema };