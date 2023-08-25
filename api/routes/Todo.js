const express = require('express');
const router = express.Router();
const Todo = require('../models/TodoModel');

// Get all todos
router.get('/all', async (req, res) => {
    try{
        const todos = await Todo.find();
        res.json(todos);
    }catch(err){
        res.json({message: err});
    }
} );

// Post a todo
router.post('/add', async (req, res) => {
      try {
        const todoAdd = new Todo({
            title: req.body.title,
            description: req.body.description,
        });
        const savedTodo = await todoAdd.save();
        res.json(savedTodo);
      } catch (error) {
         console.log(error);
      }
} );

// Delete a todo

router.delete("/delete", async (req, res) => {
  try {
    await Todo.findOneAndDelete({ _id: req.body.TodoId });
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});


// Update a todo
router.put("/update/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});


module.exports = router;


