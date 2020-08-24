const Todo = require("../models/Todo");

exports.getTodos = async (req, res, next) => {
  const todos = await Todo.find();
  res.status(200).send(todos);
};
exports.getTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findById();
    if (!todo)
      throw new createError.NotFound("this todo not found, mb wrong id");
    res.status(200).send(todo);
  } catch (e) {
    next(e);
  }
};
exports.addTodo = async (req, res, next) => {
  const todo = new Todo({
    title: req.body.title,
  });
  try {
    await todo.save();
    res.status(200).send(todo);
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.updateTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findOne({ _id: req.params.id });
    todo.completed = !todo.completed;
    await todo.save();
    res.status(200).send("updated");
  } catch (e) {
    res.status(500).send(e);
  }
};
exports.deleteTodo = async (req, res, next) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) res.status(404).send("not found");
    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
  }
};
