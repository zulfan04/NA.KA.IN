const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController.js");

router.post("/create", UserController.addUser);
router.get("/show", UserController.showAllUser);
router.get("/show/:id", UserController.showSpecificUser);
router.put("/update/:id", UserController.updateUser);
router.delete("/delete/:id", UserController.deleteUser);

module.exports = router;
