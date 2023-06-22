const { Router } = require("express");
const dogRoute = require("./dogRoutes");
const temperRoute = require("./temperRoutes");

const router = Router();

router.use("/", dogRoute);
router.use("/", temperRoute);

module.exports = router;
