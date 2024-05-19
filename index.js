const dotenv = require('dotenv'); 
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");
const connectDB = require('./configs/mongoDB_config');

const taskRoute = require("./routes/task.route");
const userRoute = require("./routes/user.route");


const app = express();


dotenv.config(); 
connectDB();

const port = process.env.PORT || 3000; 

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({credentials:true, origin:'*', optionsSuccessStatus: 200}));


app.get('/', (req, res) => {
  res.send("Hello from the API")
})

//routes
app.use("/api/tasks", taskRoute);
app.use("/api/users", userRoute);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Management API documentation",
      version: "0.1.0",
      description:
        "This is a Task Management app built for Niyo Group backend developement assessment",
      // contact: {
      //   name: "Joshua Chinwendu",
      //   email: "joshuachinwendu@gmail.com",
      // },
    },
    servers: [
      {
        url: "https://niyo-dxc0.onrender.com/api/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);


app.listen(
  port,
  console.log(
    `Server running on port ${port}`
  )
)