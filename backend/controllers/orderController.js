//orderController.js

const Order = require('../models/Order');

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, event } = req.body;

    const order = await Order.findByIdAndUpdate(
      id,
      { $push: { eventLog: { event, timestamp: new Date() } }, status },
      { new: true }
    );

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
