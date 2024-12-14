// storeRoutes.js
const express = require('express');
const { createStore, getStores, updateStore } = require('../controllers/storeController');

const router = express.Router();

router.post('/create', createStore);
router.get('/', getStores);
router.put('/:id', updateStore);

module.exports = router;
