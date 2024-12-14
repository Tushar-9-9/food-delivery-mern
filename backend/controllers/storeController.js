//  storeController.js
const Store = require('../models/Store');

exports.createStore = async (req, res) => {
  try {
    const { name, username, password, aggregators } = req.body;
    const store = new Store({ name, username, password, aggregators });
    await store.save();
    res.status(201).json({ message: 'Store created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateStore = async (req, res) => {
  try {
    const store = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(store);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};