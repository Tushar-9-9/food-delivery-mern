// Store.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  aggregators: [{ type: String }],
}, { timestamps: true });

storeSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('Store', storeSchema);
