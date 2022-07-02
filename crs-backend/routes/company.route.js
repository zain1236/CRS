var express = require("express");
var router = express.Router();
var controller = require("../controller/index");

router.get("/all", controller.Company.getAll);
router.get("/", controller.Company.getById);
router.put("/", controller.Company.update);
router.post("/", controller.Company.add);
router.delete("/", controller.Company.delete);

module.exports = router;
