// Order.js
const orderSchema = new mongoose.Schema({
    storeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
    items: [String],
    aggregator: { type: String, required: true },
    netAmount: { type: Number, required: true },
    grossAmount: { type: Number, required: true },
    tax: { type: Number, required: true },
    discounts: { type: Number, required: true },
    eventLog: [{ event: String, timestamp: Date }],
  }, { timestamps: true });
  
  module.exports = mongoose.model('Order', orderSchema);