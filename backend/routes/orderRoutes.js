//orderRoutes.js

const express = require('express');
const { getStoreOrders } = require('../controllers/orderController');
const router = express.Router();

router.get('/:storeId', getStoreOrders); // Fetch orders for a specific store

module.exports = router;
