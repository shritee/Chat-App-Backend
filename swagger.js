const swaggerJSDoc = require('swagger-jsdoc');
require('./routes/auth.route')

// Swagger definition
const swaggerDefinition = {
  info: {
    title: 'Echo Craze',
    version: '1.0.0',
    description: 'Your API Description',
  },
  host: 'localhost:3200', // Your server's hostname
  basePath: '/', // The base path on which the API is served, which is optional.
  
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./routes/auth.route.js'], // Path to the API routes (change this to match your project structure)
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
