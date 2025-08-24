const mongoose = require('mongoose');
const OrderCollection = require("../../models/order");
const PaymentCollection = require("../../models/payment");
const stripe = require('stripe')(process.env.STRIPE_SECRET)

const paymentIntentServ = async (reqData) => {

    try {
      const {totalamount} = reqData

      const convertedAmount = Math.round(totalamount * 100);

      console.log('test ammount ===>', totalamount, convertedAmount)
      
      const paymentIntent = await stripe.paymentIntents.create({
          currency: 'usd',
          amount: convertedAmount,
          payment_method_types: ['card']
          });

      return {clientSecret: paymentIntent.client_secret }

    } catch (error) {
      return { message: "Intent request Failed" , error};
    }
};


const orderPrecessingServ = async (reqData) => {
      const {orderObj, paymentObj} = reqData;

      const session = await mongoose.startSession();
      session.startTransaction();

      try {
        // Step 1: create order
        const order = await OrderCollection.create([orderObj], { session });

        // Step 2: create payment with order ref
        const payment = await PaymentCollection.create([{...paymentObj, order: order[0]._id,}], { session });

        // Step 3: update order with payment ref
        order[0].payment = payment[0]._id;
        await order[0].save({ session });

        await session.commitTransaction();
        session.endSession();

        return {msg: 'Order Processed Successfully'};

      } catch (err) {
        await session.abortTransaction();
        session.endSession();
        return {msg: 'Order Processing Failed', err};
      }

};

module.exports = {
  paymentIntentServ,
  orderPrecessingServ
};
  