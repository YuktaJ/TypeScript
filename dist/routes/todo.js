"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({
        todos: todos
    });
});
router.post('/todo', (req, res, next) => {
    let body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({
        message: "Added Todo",
        todo: newTodo,
        todos: todos
    });
});
router.put('/todo/:todoId', (req, res, next) => {
    let body = req.body;
    let params = req.body;
    const tid = params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({
            message: "Updated todo.",
            todos: todos
        });
    }
    res.status(404).json({
        message: "Could not find todo for this id."
    });
});
router.delete('/todo/:todoId', (req, res, next) => {
    todos = todos.filter(todoItem => todoItem.id !== req.params.todoId);
    res.status(200).json({
        message: "Deleted Todo",
        todo: todos
    });
});
exports.default = router;
