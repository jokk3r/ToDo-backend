const express = require("express");
const router = express.Router();

const {
  getTodos,
  getTodo,
  addTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todosController");
// const Todo = require("../models/Todo");

router.route("/").get(getTodos).post(addTodo);
router.route("/:id").get(getTodo).put(updateTodo).delete(deleteTodo);
module.exports = router;
