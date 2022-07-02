var express = require("express");
var router = express.Router();
var controller = require("../controller/index");

router.get("/all",controller.Customer.getAll);
router.get("/", controller.Customer.getOne);
// router.put("/",controller.Company.update);
router.post("/", controller.Customer.add);
// router.delete("/",controller.Company.delete);

module.exports = router;
