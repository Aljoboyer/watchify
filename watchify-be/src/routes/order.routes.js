const { paymentIntentCtrl, orderProcessingCtrl } = require("../controllers/orderCtrl/order.ctrl");

const router = require("express").Router();

router.post("/payment/create-intent", paymentIntentCtrl);
router.post("/process", orderProcessingCtrl);

module.exports = router;
