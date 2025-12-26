const express = require('express');
const router = express.Router();
const { getConsume, addConsume, updateConsume, deleteConsume } = require('../controllers/consumeController');

router.get('/', getConsume);
router.post('/', addConsume);
router.put('/:id', updateConsume);
router.delete('/:id', deleteConsume);

module.exports = router;
