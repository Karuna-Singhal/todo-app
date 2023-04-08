const Todo = require("../models/todoModel");

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.error("Error while fetching todo", err);
    res.status(400 || err.status).json({
      success: false,
      message: err.type === "custom_err" ? err.message : "Failed to get todos",
    });
  }
};

exports.createNewTodo = async (req, res) => {
  try {
    const todo = new Todo({
      text: req.body.text,
    });
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error("Error while creating todo", err);
    res.status(400 || err.status).json({
      success: false,
      message:
        err.type === "custom_err" ? err.message : "Failed to create todos",
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
  } catch (err) {
    console.error("Error while deleting todo", err);
    res.status(400 || err.status).json({
      success: false,
      message: err.type === "custom_err" ? err.message : "Failed to get todos",
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.complete = !todo.complete;
    await todo.save();
    res.json(todo);
  } catch (err) {
    console.error("Error while updating todo", err);
    res.status(400 || err.status).json({
      success: false,
      message: err.type === "custom_err" ? err.message : "Failed to get todos",
    });
  }
};
