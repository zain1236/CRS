var express = require("express");
var router = express.Router();
var controller = require("../controller/index");

router.get("/all", controller.Gurantor.getAll);
router.get("/", controller.Gurantor.getOne);
// router.put("/",controller.Company.update);
router.post("/", controller.Gurantor.add);
// router.delete("/",controller.Company.delete);

module.exports = router;
