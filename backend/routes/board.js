const express = require("express");
const router = express.Router();
const BoardController = require("../controllers/board");
const Auth = require("../middleware/auth");
const ValidateUser = require("../middleware/validateUser");
const Upload = require("../middleware/file");
const multyParty = require("connect-multiparty");
const mult = multyParty();

router.post("/saveTask", Auth, ValidateUser, BoardController.saveTask);
router.post("/saveTaskImg", mult, Upload, Auth, ValidateUser, BoardController.saveTaskImg);
router.get("/listTask", Auth, ValidateUser, BoardController.listTask);
router.put("/updateTask", Auth, ValidateUser, BoardController.updateTask);
router.delete("/deleteTask/:_id", Auth, ValidateUser, BoardController.deleteTask);

module.exports = router;
