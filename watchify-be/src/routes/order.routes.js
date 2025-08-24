const { paymentIntentCtrl } = require("../controllers/orderCtrl/order.ctrl");

const router = require("express").Router();

router.post("/payment/create-intent", paymentIntentCtrl);

module.exports = router;
