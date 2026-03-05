import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Assignment Log Book API",
      version: "1.0.0",
      description: "API documentation for Assignment Log Book"
    }
  },
  apis: ["./src/app/api/**/*.ts"]
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;