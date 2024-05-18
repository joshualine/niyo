const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      required: true,
      default: false
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'High'
    },
  },
  {
    timestamps: true,
  }
);


const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;