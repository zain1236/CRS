var express = require("express");
var router = express.Router();
var controller = require("../controller/index");

// router.get("/all",controller.Company.getAll);
router.post("/", controller.Dealer.addDealer);
// router.put("/",controller.Company.update);
router.get("/", controller.Dealer.getAll);
// router.delete("/",controller.Company.delete);

module.exports = router;
