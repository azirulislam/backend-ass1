const express = require('express');
const controller =require("../controller/controller");

const router = express.Router();

router.get("/", controller.getUser);

router.post("/", controller.addData);

router
  .route("/:id")
  .patch(controller.updateUser)
  .delete(controller.deleteUser)

module.exports = router;