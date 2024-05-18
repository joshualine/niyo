const dotenv = require('dotenv'); 
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const connectDB = require('./configs/mongoDB_config');

const taskRoute = require("./routes/task.route");


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


app.listen(
  port,
  console.log(
    `Server running on port ${port}`
  )
)