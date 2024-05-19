/**
 * @swagger
 * components:
 *   schemas:
 *     Tasks:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - completed
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the task
 *         title:
 *           type: string
 *           description: The title of your task
 *         description:
 *           type: string
 *           description: The task description
 *         completed:
 *           type: boolean
 *           default: false
 *           description: Whether the task has been completed
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the task was added
 *     
 */


/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: The tasks managing API
 * /api/tasks:
 *   get:
 *     summary: Lists all the tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: The list of the tasks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tasks'
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Tasks'
 *     responses:
 *       200:
 *         description: The created task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tasks'
 *       500:
 *         description: Some server error
 * /api/tasks/{id}:
 *   get:
 *     summary: Get the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *     responses:
 *       200:
 *         description: The task response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tasks'
 *       404:
 *         description: The task was not found
 *   put:
 *    summary: Update the task by the id
 *    tags: [Tasks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The task id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Tasks'
 *    responses:
 *      200:
 *        description: The task was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Tasks'
 *      404:
 *        description: The task was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the task by id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *
 *     responses:
 *       200:
 *         description: The task was deleted
 *       404:
 *         description: The task was not found
 */




const express = require("express");
const Task = require("../models/task.model.js");
const router = express.Router();
const { getTasks, getTask, createTask, updateTask, deleteTask } = require('../controllers/task.controller.js');


router.get('/', getTasks);
router.get("/:id", getTask);

router.post("/", createTask);

// update a task
router.put("/:id", updateTask);

// delete a task
router.delete("/:id", deleteTask);




module.exports = router;