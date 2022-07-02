var express = require("express");
var router = express.Router();

var controller = require("../controller/index");

router.get("/all", controller.Car.getAll);
router.get("/", controller.Car.getOne);
router.put("/", controller.Car.update);
router.post("/", controller.Car.add);
router.delete("/", controller.Car.delete);

module.exports = router;
