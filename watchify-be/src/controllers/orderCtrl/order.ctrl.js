const { paymentIntentServ } = require("../../services/orderServ/orderServ");


//Creating Payment Intent
const paymentIntentCtrl = async (req, res) => {

    try {
      const result = await paymentIntentServ(req.body);
      
      res.status(201).json(result);

    } catch (error) {
      res.status(500).json({ message: "Rent request Failed" , error});
    }
};

module.exports = {
  paymentIntentCtrl
};
  