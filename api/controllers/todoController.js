const Todo = require("../models/todoModel");

exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

exports.createNewTodo = (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });

  todo.save();
  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  res.json(result);
};

exports.updateTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();
  res.json(todo);
};
