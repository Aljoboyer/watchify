const { paymentIntentServ, orderPrecessingServ } = require("../../services/orderServ/orderServ");


//Creating Payment Intent
const paymentIntentCtrl = async (req, res) => {

    try {
      const result = await paymentIntentServ(req.body);
      
      res.status(201).json(result);

    } catch (error) {
      res.status(500).json({ message: "Payment Intent Failed" , error});
    }
};

const orderProcessingCtrl = async (req, res) => {

    try {
      const result = await orderPrecessingServ(req.body);
      
      res.status(201).json(result);

    } catch (error) {
      res.status(500).json({ message: "Order Failed" , error});
    }
};

module.exports = {
  paymentIntentCtrl,
  orderProcessingCtrl
};
  