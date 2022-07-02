const controller = require("../controller");
const router = require("express").Router();

router
  .route("/")
  .post(controller.Returned.AddReturning)
  .get(controller.Returned.getAReturn);

router.get("/all ", controller.Returned.getAllReturns);

module.exports = router;
