const Board = require("../models/board");

const saveTask = async (req, res) => {
  if (!req.body.name || !req.body.description)
    return res.status(400).send("process failed: Incomplete data");

  const board = new Board({
    userId: req.user._id,
    name: req.body.name,
    description: req.body.description,
    taskStatus: "to-do",
  });

  const result = await board.save();
  if (!result)
    return res.status(400).send("Process faild: Failed to register task");
  return res.status(200).send({ result });
};

const listTask = async (req, res) => {
  
};

const updateTask = async (req, res) => {};

const deleteTask = async (req, res) => {};

module.exports = { saveTask, listTask, updateTask, deleteTask };
