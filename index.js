const express = require('express');
const cors = require("cors");
const connectDB = require("./config/db");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Skateshop API",
        version: "1.0.0",
      },
      servers: [
        {
          url: serverUrl,
        },
      ],
      components: {
        securitySchemes: {
          ApiKeyAuth: {
            type: "apiKey",
            in: "header",
            name: "x-auth-token",
          },
        },
      },
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`],
  };
  
  const swaggerDocs = swaggerJsDoc(swaggerOptions);  

const app = express();

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const routes = require("./routes");
app.use(process.env.URL_BASE + "/", routes);

connectDB();

app.listen(process.env.PORT || 3000, () => {
  console.log(`listen in port ${process.env.PORT}`);
});