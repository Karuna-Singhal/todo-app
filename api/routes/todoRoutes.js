const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.route("/").get(todoController.getTodos);
router.route("/new").post(todoController.createNewTodo);
router.route("/delete/:id").delete(todoController.deleteTodo);
router.route("/update/:id").get(todoController.updateTodo);

module.exports = router;
