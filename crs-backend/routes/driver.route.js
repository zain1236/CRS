var express = require("express");
var router = express.Router();
var controller = require("../controller/index");

// router.get("/all", controller.Company.getAll);
router.get("/all", controller.Driver.getAll);

router.get("/", controller.Driver.getOne);
// router.put("/",controller.Company.update);
router.post("/", controller.Driver.add);
// router.delete("/",controller.Company.delete);

module.exports = router;
